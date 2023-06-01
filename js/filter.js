function filter() {
    let criteria = Array.from(document.querySelectorAll("div.filter select.filter-select"));
    criteria = criteria.map(c => {
        return {
            name: c.name,
            value: c.value
        };
    });

    let anyMatch = false;
    document.querySelectorAll("div.list div.item").forEach(it => {
        let props = getDataAttribs(it);
        let match = true;
        criteria.forEach(c => {
            if (c.value == "any") { return; }
            if (props[c.name] != c.value) {
                match = false;
            }
        });

        anyMatch |= match;
        it.style.display = (match ? "inline-block" : "none");
    });

    document.querySelector("div.list div.noItem").style.display = (anyMatch ? "none" : "block");
}

function clearFilter() {
    document.querySelectorAll("div.filter select.filter-select").forEach(sel => {
        sel.value = "any";
    });
    filter();
}

document.querySelectorAll("div.filter select.filter-select").forEach(sel => {
    sel.addEventListener("change", filter);
});