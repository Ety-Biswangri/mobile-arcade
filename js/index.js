// loading phones using phone names
const loadPhones = () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayPhones(data.data))
    // console.log(url);
}

// displaying phones using phone names
const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    // error handling
    if (phones.length === 0) {
        console.log('No phones are found');
    }
    else {
        phones.forEach(phone => {
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

const loadDetails = (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.data))
}

const displayDetails = (detail) => {
    console.log(detail);
    const phoneDetailsContainer = document.getElementById('phone-details-container');
    phoneDetailsContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col-12');
    div.classList.add('my-5');
    div.innerHTML = `
                <div class="card" style="width: 18rem; margin: auto">
                    <img src="${detail.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${detail.name}</h5>
                        <p class="card-text">Brand: ${detail.releaseDate}</p>
                    </div>
                </div>
            `;
    phoneDetailsContainer.appendChild(div);
}