const searchButton = document.getElementById('search-button');
const countryInput = document.getElementById('country-input');

// Allows the Enter key to be used to trigger the button
countryInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('search-button').click();
  }
});

// Displays the country name, flag, and other information related to the country
// If input field is empty or doesn't equate to a country, inform the user
searchButton.addEventListener('click', () => {
  let countryName = countryInput.value;
  let countryURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  //console.log(countryURL);
  fetch(countryURL)
    .then((response) => response.json())
    .then((data) => {
      /* console.log(data);
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.png);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(data[0].population);
            console.log(data[0].timezones[0]);
            console.log(
                Object.values(data[0].languages).join(", ")
            ); */
      result.innerHTML = `
                <h2>${data[0].name.common}</h2>
                <img src="${data[0].flags.png}"
                class="flag-img" alt="${data[0].name.common} flag">
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Languages Spoken:</h4>
                        <span>${Object.values(data[0].languages).join(
                          ', '
                        )}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Timezone:</h4>
                        <span>${data[0].timezones[0]}</span>
                    </div>
                </div>
            `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `
                <h3>Please enter a country name</h3>
            `;
      } else {
        result.innerHTML = `
                <h3>Please enter a <u>valid</u> country name</h3>
            `;
      }
    });
});
