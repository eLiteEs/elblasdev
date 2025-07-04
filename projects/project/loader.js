async function getJSON(id) {
    try {
        const response = await fetch("../list/projects.json");
        const text = await response.text();
        return JSON.parse(text)[id];
    } catch (error) {
        console.error("Error:", error);
    }
}

function generateList(elements) {
    let html = "";
    for (const element of elements) {
        html += `<li>${element}</li>`;
    }
    return html;
}

marked.setOptions({
    breaks: true,
});

async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("source");

    let json = await getJSON(value);

    document.getElementById("project-title").innerText = json.title;
    document.getElementById("project-description").innerText = json.description;
    document.getElementById("project-categories").innerHTML = generateList(json.categories);
    document.getElementById("project-image").src = "../../images/" + json.image;
    document.getElementById("project-content").innerHTML = marked.parse(json.content);
}

document.addEventListener("load", loadPage());