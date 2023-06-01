const langSelect = document.querySelector("div#langSelect");
const currLang = langSelect.getAttribute("data-currLang");

// redirect
if(!location.pathname.endsWith(".html")) {
    let pathname = location.pathname;
    if(!pathname.endsWith("/")) { pathname += '/'; }
    pathname += "index.html";
    location.pathname = pathname;
}

// fixing links
function getCorrectLink(link, lang){
    let path = link.replace(location.origin, "");
    if(lang != "bg") {
        path = `/${lang}` + path;
    }
    return path;
}

function fixLinks(lang){
    let allA = Array.from(document.querySelectorAll("a"));
    let localA = allA.filter(a => a.href.startsWith(location.origin));
    localA.forEach(a => a.href = getCorrectLink(a.href, lang));
}

fixLinks(currLang);

// chosing

function langChosen(ev) {
    let img = ev.currentTarget;
    let lang = img.getAttribute("data-lang");
    let pathName = location.pathname;
    if(currLang != "bg"){
        pathName = pathName.replace(`/${currLang}`, "");
    }
    let currPathnameInLang = getCorrectLink(pathName, lang);
    location.pathname = currPathnameInLang;
}

Array.from(langSelect.children).forEach(img => {
    let lang = img.getAttribute("data-lang");
    if(lang != currLang){
        img.style.display = "none";
    }else{
        let node = langSelect.removeChild(img);
        langSelect.prepend(node);
    }
});

langSelect.addEventListener("click", ev => {
    let langs = Array.from(ev.currentTarget.children);
    langs.forEach((lang, idx) => {
        lang.style.display = ""
        lang.addEventListener("click", langChosen);
        lang.style.top = `${idx * 70}px`;
    });
});