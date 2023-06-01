function transferAttribs(from, to) {
    from.getAttributeNames().forEach(attr => {
        to.setAttribute(attr, from.getAttribute(attr))
    });
}

function htmlToElement(html) {
    // from https://stackoverflow.com/a/35385518
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

const getDataAttribs = el => Object.assign({}, el.dataset);