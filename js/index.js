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
            console.log(phone);
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
                        <button class="btn btn-primary">Explore Now</Details>
                    </div>
                </div>
            `;
            phoneContainer.appendChild(div);
        });
    }
}