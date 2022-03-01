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
            `<div class="card border p-5 mb-5 d-flex justify-content-center">
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
                    <p class="card-title"><span class="h6 pe-5">Name:</span>${info.data.name}</p>
                    <p class="card-text"><span class="h6 pe-5">Brand:</span>${info.data.brand}</p>
                    <p class="card-text"><span class="h6 pe-5">Id:</span>${info.data.slug}</p>
                    <p class="card-text"><span class="h6 pe-5">Launch:</span>${info.data.releaseDate}</p>
                    <p class="card-text"><span class="h6 pe-5">Chip:</span>${info.data.mainFeatures.chipSet}</p>
                    <p class="card-text"><span class="h6 pe-5">Display:</span>${info.data.mainFeatures.displaySize}</p>
                    <p class="card-text"><span class="h6 pe-5">Memory:</span>${info.data.mainFeatures.memory}</p>
                    <p class="card-text"><span class="h6 pe-5">Storage:</span>${info.data.mainFeatures.storage}</p>
                    <p class="card-text"><span class="h6 pe-5">Sensors:</span>${info.data.mainFeatures.sensors}</p>
                    <p class="card-text"><span class="h6 pe-5">Others:</span>${info.data.others.WLAN} ${info.data.others.Bluetooth} ${info.data.others.GPS} ${info.data.others.NFC} ${info.data.others.Radio} ${info.data.others.USB}</p>
                </div>
            </div>
        `;
};