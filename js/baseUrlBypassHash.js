function visitHash(ev){
    ev.preventDefault();
    let hash = ev.target.href.split("#")[1];
    location.hash = hash;
}

document.querySelectorAll("a.hashLink").forEach(a => {
    a.addEventListener("click", visitHash);
})