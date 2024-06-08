// dom nodes
const root = document.getElementById("root");
const basket = document.getElementById("basket");

// function
function render(list) {
    let template = `<section class="products">`
    template += list.map(item => {
        return `
            <div class="product">
                <img src="./image/${item.imgSrc}" alt="${item.title}".jpeg>
                <h2>${item.title}</h2>
                <p> ${item.author} - ${item.published_date}</p>
                ${!BASKET.find(basketItem => basketItem.id === item.id)
                ?
                `<button onclick="handleAddToBasket('${item.id}')">ADD TO BASKET</button>`
                :
                `<h4>ADDED TO BASKET</h4>`
            }
            </div>`
    }).join("");

    template += '</section>';
    root.innerHTML = template;
    basket.textContent = BASKET.length

}

function renderBasket() {
    let template = `<section class="baskets">
    `
    template += BASKET.map(item => {
        return `
            <div class="product basket">
                <img src="./image/${item.imgSrc}" alt="${item.title}".jpeg>
                <h2>${item.title}</h2>
                <p> ${item.author} - ${item.published_date}</p>
                <button onclick="handleRemove(${item.id})" class='remove'>REMOVE FROM LIBRARY</button>
            </div>`
    }).join("");

    template += '</section>';
    root.innerHTML = template;
    basket.textContent = BASKET.length
}

function handleSearch(event) {
    const value = event.target.value.toLowerCase();
    const searchResult = BOOKS.filter(book =>
        book.title.toLowerCase().includes(value) ||
        book.author.toLowerCase().includes(value)
    );
    render(searchResult);
}

let handleRemove = (productId) => {
    let filtered = BASKET.filter((item) => !(item.id === +productId));
    BASKET = filtered;
    renderBasket();
  };
function handleAddToBasket(productId) {
    const finded = BOOKS.find(item => item.id === +productId);
    BASKET.push(finded);
    render(BOOKS)
}
let handleBackToMenu = () => {
    render(BOOKS);
  };
// events
window.addEventListener("load", () => {
    render(BOOKS)
    document.getElementById("genre-buttons").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const genre = event.target.getAttribute("id");
            let filtered;
            if (genre === "همه") {
                filtered = BOOKS;

            } else {
                filtered = BOOKS.filter(book => book.genre === genre);
            }
            render(filtered);
        }
    })

})
