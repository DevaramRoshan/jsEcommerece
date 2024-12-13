const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

async function sendFormData(api, bodyData) {
    const promised = fetch(api, {
        method: "POST",
        body: bodyData,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    });
    const result = (await promised).json();
    return await result;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const urlencoded = new URLSearchParams(formData).toString();
    const sendingData = await sendFormData("http://localhost:8001/admin/verify", urlencoded);
    console.log(sendingData);
    if (sendingData.message == "verified") {
        sessionStorage.setItem("adminName", sendingData.adminName);
        window.location.href = "./index.html";
    }
    else {
        alert("access denied");
    }
});

