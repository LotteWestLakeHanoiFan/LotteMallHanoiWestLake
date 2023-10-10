const btnGetLoc = document.getElementById("btnGetLoc");
const la_span = document.getElementById("la_span");
const lo_span = document.getElementById("lo_span");
const geoOption = {
    enableHighAccuracy: true,
    timeout:5000,
    maximumAge:0,
}

function displayGPS_Coordinates(pos){
    la_span.innerText = pos.coords.latitude
    lo_span.innerText = pos.coords.longitude 
}

function findCoordinates(){
    navigator.geolocation.getCurrentPosition(displayGPS_Coordinates,null,geoOption)
}

btnGetLoc.addEventListener("click",findCoordinates);