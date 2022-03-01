// button event handler setup
const searchButton = () => {
    const inputValue = document.getElementById("input-value").value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(res => res.json())
        .then(data => phonesDisplay(data.data));
    // console.log(data);
};

const phonesDisplay = (phones) => {
    for (const data of phones) {
        // console.log(data);
        const parent = document.getElementById('parent-container');
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.innerHTML = 
            `<div class="card border p-5 mb-5">
                    <img src="${data.image}" class="card-img-top h-100 w-25" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                    <div class="details-button">
                        <button onclick="phoneDetails('${data.slug}')" class="btn btn-danger">Details</button>
                    </div>
                </div>
            </div>
            `
        parent.appendChild(div);
        // console.log(data);
    };
};

    /* ===========================================
                     Details
    =========================================== */

const phoneDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data));
        // .then(data => console.log(data));

};

const setDetails = (info) => {
    document.getElementById('details-container').innerHTML =
        `<div class="card border p-5 mb-5 container">
                    <img class="img-thumbnail w-50 h-100" src="${info.data.image}" class="card-img-top h-50 w-75" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${info.data.name}</h5>
                    <p class="card-text">${info.data.releaseDate}</p>
                </div>
            </div>
        `;
};