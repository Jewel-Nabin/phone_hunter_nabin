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
                    <img src="${data.image}" class="card-img-top h-50 w-75" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                    <div class="details-button">
                        <button class="btn btn-danger">Details</button>
                    </div>
                </div>
            </div>
            `
        parent.appendChild(div);
        // console.log(data);
    };
    // console.log(phones);
};

/* `<div class="card border p-5 mb-5">
            <div class="phone-image">
                <img class="w-50" src="${data.image}" alt="">
            </div>
            <h2>Phone Name: </h2>
            <h5>Brand Name: </h5>
            <div class="details-button">
                <button class="btn btn-danger">Details</button>
            </div>
        </div>
        `; */