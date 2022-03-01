const phoneDetailsContainer = document.getElementById('phone-details-container');

// loading phones using phone names
const loadPhones = () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayPhones(data.data))
}

// displaying phones using phone names
const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    const errorMessage = document.getElementById('error-message');
    phoneDetailsContainer.textContent = '';
    phoneContainer.textContent = '';
    errorMessage.textContent = '';
    const first20Phones = phones.slice(0, 20);

    // error handling
    if (first20Phones.length == 0) {
        errorMessage.innerHTML = `
        <p class="text-center text-danger fw-bold fs-3 my-3">Sorry! No Phone Is Found</p>
        `;
    }
    else {
        first20Phones.forEach(phone => {
            // console.log(phone);
            const div = document.createElement('div');
            div.classList.add('col-lg-4');
            div.classList.add('col-12');
            div.classList.add('mt-5');
            div.innerHTML = `
                    <div class="card" style="width: 18rem; margin: auto">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">Brand: ${phone.brand}</p>
                            <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary">Explore Now</Details>
                        </div>
                    </div>
                `;
            phoneContainer.appendChild(div);
        });
    }
}

// loading phone details using slug
const loadDetails = (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.data))
}

// displaying phone details using slug
const displayDetails = (detail) => {
    console.log(detail.others);
    phoneDetailsContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col-12');
    div.classList.add('my-5');
    div.innerHTML = `
                <div class="card" style="width: 80%; margin: auto">
                    <img src="${detail.image}" style="width: 200px; margin: auto; height: 300px;  margin-top: 10px; margin-bottom: 10px; " class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${detail.name}</h5>
                        <p class="card-text">${detail.releaseDate ? detail.releaseDate : 'No Release Date is found'}</p>
                        <h6> <b>Main Features:</b> </h6>
                        <p> <b>Display Size:</b> ${detail.mainFeatures.displaySize ? detail.mainFeatures.displaySize : 'No Display Size is found'}
                         <br>
                         <b>Chipset:</b> ${detail.mainFeatures.chipSet ? detail.mainFeatures.chipSet : 'No Chipset is found'}
                         <br>
                         <b>Storage:</b> ${detail.mainFeatures.storage ? detail.mainFeatures.storage : 'No storage is found'}
                         <br>
                         <b>Memory:</b> ${detail.mainFeatures.memory ? detail.mainFeatures.memory : 'No Memory is found'}
                         <br>
                         <b>Sensors:</b> ${detail.mainFeatures.sensors ? detail.mainFeatures.sensors : 'No Sensors are found'}
                         <br>
                         <h6> <b>Others:</b> </h6>
                    </div>
                </div>
            `;
    phoneDetailsContainer.appendChild(div);
}