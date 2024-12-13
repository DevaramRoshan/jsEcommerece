const showData = document.querySelector(".showData");
const addFormCategory = document.getElementById("formAddCategory");
const welcome = document.querySelector(".welcome");

function appendCategories(categoryObj) {
    const box = document.createElement("div");
    box.style = `
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #7ae7c7;
    margin:0.5rem 0;
    `
    const p = document.createElement("h3");
    p.textContent = `${categoryObj.categoryName}`;
    const buttonDiv = document.createElement("div");
    buttonDiv.style = `
    padding: 1rem;
    `
    const showItemsBtn = document.createElement("button");
    const deleteCategoryBtn = document.createElement("button");
    deleteCategoryBtn.textContent = `Delete category`;
    showItemsBtn.textContent = `Show Items`;
    deleteCategoryBtn.setAttribute("class", "categoryButtons");
    showItemsBtn.setAttribute("class", "categoryButtons");

    deleteCategoryBtn.addEventListener("click", () => {
        deleteCategory(categoryObj.categoryName);
    })
    showItemsBtn.addEventListener("click", () => {
        getItemsAndShow(categoryObj.categoryName);
    });
    box.appendChild(p);
    buttonDiv.appendChild(deleteCategoryBtn);
    buttonDiv.appendChild(showItemsBtn);
    box.appendChild(buttonDiv);
    showData.appendChild(box);
}

async function showCategories() {
    const allCategories = await fetch("http://localhost:8001/category");
    const data = await allCategories.json();
    data.forEach((val) => {
        appendCategories(val);
    });
}

addFormCategory.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(addFormCategory);
    const urlencoded = new URLSearchParams(fd).toString();
    const sendingData = await fetch(`http://localhost:8001/category`, {
        method: "POST",
        body: urlencoded,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    });
    const receivedData = await sendingData.json();
    if (receivedData.message == "category added!!") {
        alert("category added successfully!");
        appendCategories(receivedData._doc);
    }
    else {
        alert("category not added");
    }
})

async function deleteCategory(category) {
    const sendingData = await fetch(`http://localhost:8001/category/${category}`, {
        method: "DELETE"
    });
    const receivedData = await sendingData.json();
    console.log(receivedData);
    if (receivedData.result.acknowledged) {
        alert("category deleted!");
        window.location.reload();
    }
    else {
        alert("error occured");
    }
}

async function getItemsAndShow(categoryName) {
    sessionStorage.setItem("categoryName", categoryName);
    let newWindow = window.open('./items.html');
}

function loadAdminName() {
    welcome.innerHTML = `<h4>welcome ${sessionStorage.getItem("adminName")}</h4>`;
}

loadAdminName();
showCategories();