var myKey = JSON.parse(apiKey);
console.log(myKey);

// var countryName = [
//   {
//     code: 0,
//     name: 'All'
//   }, {
//     code: 'ar',
//     name: 'Argentina',
//   }, {
//     code: 'au',
//     name: 'Australia',
//   }, {
//     code: 'at',
//     name: 'Austria',
//   }, {
//     code: 'be',
//     name: 'Belgium',
//   }, {
//     code: 'br',
//     name: 'Brazil',
//   }, {
//     code: 'bg',
//     name: 'Bulgaria',
//   }, {
//     code: 'ca',
//     name: 'Canada',
//   }, {
//     code: 'cn',
//     name: 'China',
//   }, {
//     code: 'co',
//     name: 'Colombia',
//   }, {
//     code: 'cu',
//     name: 'Cuba',
//   }, {
//     code: 'cz',
//     name: 'Czechia',
//   }, {
//     code: 'eg',
//     name: 'Egypt',
//   }, {
//     code: 'fr',
//     name: 'France',
//   }, {
//     code: 'de',
//     name: 'Germany',
//   }, {
//     code: 'gr',
//     name: 'Greece',
//   }, {
//     code: 'hk',
//     name: 'Hong Kong',
//   }, {
//     code: 'hu',
//     name: 'Hungary',
//   }, {
//     code: 'in',
//     name: 'India',
//   }, {
//     code: 'id',
//     name: 'Indonesia',
//   }, {
//     code: 'ie',
//     name: 'Ireland',
//   }, {
//     code: 'il',
//     name: 'Israel',
//   }, {
//     code: 'it',
//     name: 'Italy',
//   }, {
//     code: 'jp',
//     name: 'Japan',
//   }, {
//     code: 'kr',
//     name: 'Korea',
//   }, {
//     code: 'lv',
//     name: 'Latvia',
//   }, {
//     code: 'lt',
//     name: 'Lithuania',
//   }, {
//     code: 'my',
//     name: 'Malaysia',
//   }, {
//     code: 'mx',
//     name: 'Mexico',
//   }, {
//     code: 'ma',
//     name: 'Morocco',
//   }, {
//     code: 'nl',
//     name: 'Netherlands',
//   }, {
//     code: 'nz',
//     name: 'New Zealand',
//   }, {
//     code: 'ng',
//     name: 'Nigeria',
//   }, {
//     code: 'no',
//     name: 'Norway',
//   }, {
//     code: 'ph',
//     name: 'Philippines',
//   }, {
//     code: 'pl',
//     name: 'Poland',
//   }, {
//     code: 'pt',
//     name: 'Portugal',
//   }, {
//     code: 'ro',
//     name: 'Romania',
//   }, {
//     code: 'ru',
//     name: 'Russian Federation',
//   }, {
//     code: 'sa',
//     name: 'Saudi Arabia',
//   }, {
//     code: 'rs',
//     name: 'Serbia',
//   }, {
//     code: 'sg',
//     name: 'Singapore',
//   }, {
//     code: 'sk',
//     name: 'Slovakia',
//   }, {
//     code: 'si',
//     name: 'Slovenia',
//   }, {
//     code: 'za',
//     name: 'South Africa',
//   }, {
//     code: 'se',
//     name: 'Sweden',
//   }, {
//     code: 'ch',
//     name: 'Switzerland',
//   }, {
//     code: 'tw',
//     name: 'Taiwan',
//   }, {
//     code: 'th',
//     name: 'Thailand',
//   }, {
//     code: 'tr',
//     name: 'Turkey',
//   }, {
//     code: 'ua',
//     name: 'Ukraine',
//   }, {
//     code: 'ae',
//     name: 'United Arab Emirates',
//   }, {
//     code: 'gb',
//     name: 'United Kingdom',
//   }, {
//     code: 'us',
//     name: 'United States',
//   }, {
//     code: 've',
//     name: 'Venezuela',
//   }
// ];
// var categories = [
//   {
//     code: 'business',
//     name: 'Business'
//   }, {
//     code: 'entertainment',
//     name: 'Entertainment'
//   }, {
//     code: 'general',
//     name: 'General'
//   }, {
//     code: 'health',
//     name: 'Health'
//   }, {
//     code: 'science',
//     name: 'Science'
//   }, {
//     code: 'sports',
//     name: 'Sports'
//   }, {
//     code: 'technology',
//     name: 'Technology'
//   }
// ];


document.getElementById('search').addEventListener('click', function () {
  var selectedCountry = $('#countries').val();
  var selectedCategory = $('#categories').val();
  var selectedSource = $('#sources').val();

  console.log("Selected category: " + selectedCategory);
  console.log("Selected country: " + selectedCountry);
  console.log("Selected source: " + selectedSource);

  if (selectedCountry === 'all' && selectedCategory === 'all' && selectedSource === 'all') {
    // Show error message if nothing is selected
    $('#error-message').removeClass('d-none');
    return;
  } else {
    // Hide error message
    $('#error-message').addClass('d-none');
  }

  displayData(selectedCountry, selectedCategory, selectedSource);
});

function displayData(country, category, source) {
  var url;
  if (source != 'all') {
    url = `http://newsapi.org/v2/top-headlines?apiKey=${myKey[0].key}&sources=${source}`;
  } else {
    url = `http://newsapi.org/v2/top-headlines?apiKey=${myKey[0].key}`;

    if (country != 'all') {
      url += `&country=${country}`;
    }

    if (category != 'all') {
      url += `&category=${category}`;
    }
  }

  $.ajax({
    url: url,
    type: 'GET',
    data: 'json',
    success: function (data) {
      console.log(data);

      for (var i = 0; i < data.articles.length; i++) {
        var article = data.articles[i];

        $("#results").append(`
          <div class="col-md-4 p-2">
            <div class="card" style="height: 100%">
              <img src="${article.urlToImage}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
              </div>
            </div>
          </div>
        `);
      }
    },
    error: function () {
      console.log('error');
    }
  });
}


