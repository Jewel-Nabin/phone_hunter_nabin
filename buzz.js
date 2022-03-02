// button event handler setup
const searchButton = () => {
    const input = document.getElementById("input-value");
    const inputValue = input.value;
    input.value = "";
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(res => res.json())
        .then(data => phonesDisplay(data.data));
};
// display function
const phonesDisplay = (phones) => {
    for (const data of phones) {
        const parent = document.getElementById('parent-container');
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.innerHTML = 
            `<div class="card border p-5 mb-5 text-center">
                    <img src="${data.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${data.phone_name}</h4>
                    <h5 class="card-text">${data.brand}</h5>
                    <div class="details-button">
                        <button onclick="phoneDetails('${data.slug}')" class="btn btn-danger">Details</button>
                    </div>
                </div>
            </div>
            ` 
        parent.appendChild(div);
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

// set details part
const setDetails = (info) => {
    document.getElementById('details-container').innerHTML =
        `<div class="card border p-5 mb-5 container">
                    <img class="img-thumbnail w-50 h-100 mx-auto" src="${info.data.image}" class="card-img-top h-50 w-75" alt="...">
                <div class="card-body">
                    <p class="card-title"><span class="h6 pe-5">Name:</span>${info.data.name}</p>
                    <p class="card-text"><span class="h6 pe-5">Launch:</span>${info.data.releaseDate}</p>
                    <p class="card-text"><span class="h6 pe-5">Brand:</span>${info.data.brand}</p>
                    <p class="card-text"><span class="h6 pe-5">Id:</span>${info.data.slug}</p>
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

const seeMore = () => {
    document.getElementById('see-more').innerHTML =
        `<div>
            <button>See More...</button>
        </div>
        `;
};