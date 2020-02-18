var myKey = JSON.parse(apiKey);
console.log(myKey);

$.ajax({
    url:`http://newsapi.org/v2/sources?language=en&apiKey=${myKey}`,
    type:'GET',
    data:'json',
    success: function(data){
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
    error:function(){
        console.log('error')
    }
});

