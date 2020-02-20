var myKey = JSON.parse(apiKey);
console.log(myKey);

var countryName = [{
  code: 0,
  name: 'All'
},{
  code: 'ar',
  name: 'Argentina',
},{
  code: 'au',
  name: 'Australia',
},{
  code: 'at',
  name: 'Austria',
},{
  code: 'be',
  name: 'Belgium',
},{
  code: 'br',
  name: 'Brazil',
},{
  code: 'bg',
  name: 'Bulgaria',
},{
  code: 'ca',
  name: 'Canada',
},{
  code: 'cn',
  name: 'China',
},{
  code: 'co',
  name: 'Colombia',
},{
  code: 'cu',
  name: 'Cuba',
},{
  code: 'cz',
  name: 'Czechia',
},{
  code: 'eg',
  name: 'Egypt',
},{
  code: 'fr',
  name: 'France',
},{
  code: 'de',
  name: 'Germany',
},{
  code: 'gr',
  name: 'Greece',
},{
  code: 'hk',
  name: 'Hong Kong',
},{
  code: 'hu',
  name: 'Hungary',
},{
  code: 'in',
  name: 'India',
},{
  code: 'id',
  name: 'Indonesia',
},{
  code: 'ie',
  name: 'Ireland',
},{
  code: 'il',
  name: 'Israel',
},{
  code: 'it',
  name: 'Italy',
},{
  code: 'jp',
  name: 'Japan',
},{
  code: 'kr',
  name: 'Korea',
},{
  code: 'lv',
  name: 'Latvia',
},{
  code: 'lt',
  name: 'Lithuania',
},{
  code: 'my',
  name: 'Malaysia',
},{
  code: 'mx',
  name: 'Mexico',
},{
  code: 'ma',
  name: 'Morocco',
},{
  code: 'nl',
  name: 'Netherlands',
},{
  code: 'nz',
  name: 'New Zealand',
},{
  code: 'ng',
  name: 'Nigeria',
},{
  code: 'no',
  name: 'Norway',
},{
  code: 'ph',
  name: 'Philippines',
},{
  code: 'pl',
  name: 'Poland',
},{
  code: 'pt',
  name: 'Portugal',
},{
  code: 'ro',
  name: 'Romania',
},{
  code: 'ru',
  name: 'Russian Federation',
},{
  code: 'sa',
  name: 'Saudi Arabia',
},{
  code: 'rs',
  name: 'Serbia',
},{
  code: 'sg',
  name: 'Singapore',
},{
  code: 'sk',
  name: 'Slovakia',
},{
  code: 'si',
  name: 'Slovenia',
},{
  code: 'za',
  name: 'South Africa',
},{
  code: 'se',
  name: 'Sweden',
},{
  code: 'ch',
  name: 'Switzerland',
},{
  code: 'tw',
  name: 'Taiwan',
},{
  code: 'th',
  name: 'Thailand',
},{
  code: 'tr',
  name: 'Turkey',
},{
  code: 'ua',
  name: 'Ukraine',
},{
  code: 'ae',
  name: 'United Arab Emirates',
},{
  code: 'gb',
  name: 'United Kingdom',
},{
  code: 'us',
  name: 'United States',
},{
  code: 've',
  name: 'Venezuela',
}];
var categorys = [{
  code: 'business',
  name: 'Business'
},{
  code: 'entertainment',
  name: 'Entertainment'
},{
  code: 'general',
  name: 'General'
},{
  code: 'health',
  name: 'Health'
},{
  code: 'science',
  name: 'Science'
},{
  code: 'sports',
  name: 'Sports'
},{
  code: 'technology',
  name: 'Technology'
}];
Collapse










$.ajax({
  url: `http://newsapi.org/v2/sources?language=en&apiKey=${myKey[0].key}`,
  type: 'GET',
  data: 'json',
  success: function (data) {
    console.log(data);
    //     var i;
    //     for (i=0; i<data.length; i++){
    //         document.getElementById('result').innerHTML +=
    //         '<div class="col col-sm-6 col-md-6 col-lg-4 mx-2 my-5">' +
    //         '<h1>' + data[i].first_name + '</h1>' +
    //         '<h2>' + data[i].gender + '</h2>' +
    //         '<img class="img-thumbnail" src="' + data[i].avatar + '" alt="AVATAR">' +



    //         '</div>';
    // }


  },
  error: function () {
    console.log('error');
  }
});

