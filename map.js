
// La función initMap se llamará cuando se haya cargado la API de Google Maps
function initMap() {
    // Coordenadas de la ubicación de la empresa (ejemplo)
    var empresaLocation = {lat:-104.869028, lng:  21.527254 }; 



    // Crear un nuevo objeto de mapa y asignarlo al elemento con el ID "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: empresaLocation,
        zoom: 15 // Puedes ajustar el nivel de zoom según tus necesidades
    });

    // Agregar un marcador en la ubicación de la empresa
    var marker = new google.maps.Marker({
        position: empresaLocation,
        map: map,
        title: 'Ubicación de la Empresa'
    });
}
