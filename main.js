

function render(list) {
    const template = list.map(item => {
        return `
        <li onclick="handleClick(${item.id})">
            <img src='${item.icon}' />
            ${item.latinTitle}
        </li>`
    });

    document.getElementById("root").innerHTML = template.join("");
}


function handleClick(brandId) {
    const selectedBrand = BRANDS.find(item => item.id === brandId);
    const template = selectedBrand.models.map(model => {
        return `<li>${model.title}</li>`
    })
    document.getElementById("models").innerHTML = template.join("")
}

function handleSearch() {
    const searchValue = event.target.value;
    const filterdList = BRANDS.filter(brand => brand.latinTitle.search(searchValue) > -1);
    render(filterdList);
}

render(BRANDS)