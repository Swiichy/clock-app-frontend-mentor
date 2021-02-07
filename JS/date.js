
//Call of the API https://freegeoip.app/json/ to dynamically display the living area

let callBackGetSuccess = function(data) {
    console.log("donnees api", data);
    getLoca = document.getElementById('localisation');
    //console.log(data);
    getLoca.innerHTML = "in" + " " + data.country_name+","+ " " + data.country_code;
}

function getfreegeoipAPI() {
    let url = "https://freegeoip.app/json/";

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        //alert( "finished" );
    });
}

getfreegeoipAPI();


let getcurrentZone = document.querySelector('.currentZone'),
    getDoty = document.querySelector('.doty'),
    getDotw = document.querySelector('.dotw'),  
    getWk = document.querySelector('.wk'),
    //desktop-tablet
    getcurrentZoneId = document.getElementById('currentZone'),
    getDotyId = document.getElementById('doty'),
    getDotwId = document.getElementById('dotw'),
    getWkId = document.getElementById('wk');

fetch('http://worldtimeapi.org/api/ip')
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                //desktop
                getcurrentZoneId.innerHTML = data.timezone;
                getDotyId.innerHTML = data.day_of_year;
                getDotwId.innerHTML = data.day_of_week;
                getWkId.innerHTML = data.week_number;
                //mobile
                getcurrentZone.innerHTML = data.timezone;
                getDoty.innerHTML = data.day_of_year;
                getDotw.innerHTML = data.day_of_week;
                getWk.innerHTML = data.week_number;
            })
        } else{
            console.log("ERROR");
        }
    });

