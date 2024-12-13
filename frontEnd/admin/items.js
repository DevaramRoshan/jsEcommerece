const showCategory = document.querySelector(".categoryName");
const cardHolder = document.querySelector(".cardHolder");
const itemSearch = document.getElementById("itemSearch");
const addItemForm = document.getElementById("addItemForm");

window.onload = () => {
    const categoryName = sessionStorage.getItem("categoryName");
    showCategory.innerHTML = `<h1>${categoryName}</h1>`;
}

async function loadInitialData(categoryName) {
    const result = await fetch(`http://localhost:8001/item/${categoryName}`);
    const data = await result.json();
    data.forEach((val) => {
        displayData(val);
    });
}

function displayData(obj) {
    const card = document.createElement("div");
    const img = document.createElement("div");
    const info = document.createElement("div");
    const priceAndRating = document.createElement("div");
    const h4 = document.createElement("h4");
    const h6 = document.createElement("h6");
    const p = document.createElement("p");
    const rating = document.createElement("span");
    const price = document.createElement("span");
    const image = document.createElement("img");
    image.setAttribute("src", `http://localhost:8001/${obj.imgPath}`);
    image.style = `
    height:100%;
    width:100%;
    `
    img.appendChild(image);
    card.setAttribute("class", "card");
    img.setAttribute("class", "img");
    info.setAttribute("class", "info");
    priceAndRating.setAttribute("class", "priceAndRating");
    h4.textContent = `${obj.itemName}`;
    h6.textContent = `${obj.categoryName}`;
    p.textContent = `${obj.itemDescription}`;
    info.appendChild(h4);
    info.appendChild(h6);
    info.appendChild(p);
    rating.textContent = `${obj.rating}`;
    price.textContent = `${obj.price}`;
    priceAndRating.appendChild(rating);
    priceAndRating.appendChild(price);

    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(priceAndRating);
    cardHolder.appendChild(card);
}

addItemForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    const fd = new FormData(addItemForm);
    const result = await fetch(`http://localhost:8001/item`, {
        method: "POST",
        body: fd
    });
    console.log(result);
});

loadInitialData(sessionStorage.getItem("categoryName"));