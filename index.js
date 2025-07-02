/*function getLang() {
    if(localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', 'en');
    }
    return localStorage.getItem('lang');
}

async function setPageLang(lang) {
    if(lang != "en") {
        let langfile = "translations/" + lang + ".json";
        
        try {
            const response = await fetch(langfile);
            if(!response.ok) {
                throw new Error("Language file not found");
            }
            const data = await response.json();
            
            data.forEach(item => {
                document.querySelectorAll(`[id="${item.id}"]`).forEach(element => {
                    element.innerHTML = item.txt;
                });
            });
        } catch (error) {
            console.error("Failed to load language:", error);
        }
    }
}

setPageLang(getLang())

document.getElementById("language-selector").addEventListener("input", (e) => {
    localStorage.setItem('lang', e.target.value);
    setPageLang(e.target.value);
    if(e.target.value == "en") {
        window.location.reload();
    }
})*/

const projectList = document.getElementById('project-list');
const items = projectList.querySelectorAll('li');
let currentIndex = 0;

function updateGallery() {
    projectList.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateGallery();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateGallery();
});