const phoneDetailsContainer = document.getElementById('phone-details-container');

// loading phones using phone names
const loadPhones = () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayPhones(data.data))

    searchField.value = '';
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
    if (first20Phones.length === 0) {
        errorMessage.innerHTML = `
        <p class="text-center text-danger fw-bold fs-3 my-3">Sorry! No Phone Is Found</p>
        `;
    }
    else {
        first20Phones.forEach(phone => {
            // console.log(phone);
            const div = document.createElement('div');
            div.classList.add('col-lg-4');
            div.classList.add('col-md-6');
            div.classList.add('col-12');
            div.classList.add('mt-5');
            div.innerHTML = `
                    <div class="card mb-3" style="width: 80%; margin: auto; background-color: #Fdfcfa; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                        <img src="${phone.image}" class="card-img-top m-auto mt-3 img-fluid" style="width: 50%" alt="...">
                        <div class="card-body text-center">
                            <h6 class="card-title fw-bold">${phone.phone_name}</h6>
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
    // console.log(detail);
    phoneDetailsContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col-12');
    div.classList.add('my-5');
    div.innerHTML = `
                <div class="card" style="width: 70%; margin: auto; background-color:#Fdfcfa; box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;">

                    <img src="${detail.image}" style="width: 200px; margin: auto; height: 300px;  margin-top: 25px; margin-bottom: 10px; " class="card-img-top img-fluid" alt="...">

                    <div class="card-body">
                        <h4 class="card-title text-center fw-bolder">${detail.name}</h4>
                        <p class="card-text text-center">${detail.releaseDate ? detail.releaseDate : 'No Release Date is found'}</p>
                        <br>

                        <div class="m-auto">
                          <h5> <b>Main Features:</b> </h5>
                          <ul>
                           <li> <b>Display Size:</b> ${detail.mainFeatures?.displaySize ? detail.mainFeatures.displaySize : 'No  Display Size is found'} 
                           </li>
                           <li>
                           <b>Chipset:</b> ${detail.mainFeatures?.chipSet ? detail.mainFeatures.chipSet : 'No Chipset is found'}
                           </li>
                           <li>
                           <b>Storage:</b> ${detail.mainFeatures?.storage ? detail.mainFeatures.storage : 'No storage is found'}
                           </li>
                           <li>
                           <b>Memory:</b> ${detail.mainFeatures?.memory ? detail.mainFeatures.memory : 'No Memory is found'}
                           </li>
                           <li>
                           <b>Sensors:</b> ${detail.mainFeatures?.sensors ? detail.mainFeatures.sensors : 'No Sensors are found'}
                           </li>
                          </ul>
                        </div>

                        <div class="m-auto">
                          <h5> <b>Others:</b> </h5>
                          <ul>
                           <li><b>WLAN:</b> ${detail.others?.WLAN ? detail.others.WLAN : 'No WLAN is found'}
                           </li>
                           <li>
                           <b>Bluetooth:</b> ${detail.others?.Bluetooth ? detail.others.Bluetooth : 'No Bluetooth is found'}
                           </li>
                           <li>
                           <b>GPS:</b> ${detail.others?.GPS ? detail.others.GPS : 'No GPS is found'}
                           </li>
                           <li>
                           <b>NFC:</b> ${detail.others?.NFC ? detail.others.NFC : 'No NFC is found'}
                           </li>
                           <li>
                           <b>Radio:</b> ${detail.others?.Radio ? detail.others.Radio : 'No Radio is found'}
                           <li>
                           <b>USB:</b> ${detail.others?.USB ? detail.others.USB : 'No USB is found'}
                           </li>
                          </ul>
                        </div>
                    </div>
                </div>
            `;
    phoneDetailsContainer.appendChild(div);
}