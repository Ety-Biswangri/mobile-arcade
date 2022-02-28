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
    // console.log(phones);
    phones.forEach(phone => {
        console.log(phone);
    });
}