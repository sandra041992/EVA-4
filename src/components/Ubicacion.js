import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Reemplaza TU_API_KEY por tu API Key de Google Maps
const Ubicacion = () => {
    const center = {
        lat: -33.53558, // Reemplaza con la latitud de tu tienda
        lng: -70.63475 // Reemplaza con la longitud de tu tienda
    };
    const lat = -33.53558; // Reemplaza con la latitud de tu tienda
    const lng = -70.63475; // Reemplaza con la longitud de tu tienda
    const url = `https://www.google.cl/maps/place/El+Shopping/@-33.535682,-70.6353009,20.04z/data=!4m6!3m5!1s0x9662da6f78151a03:0xf148170177e93e7c!8m2!3d-33.5355889!4d-70.6348139!16s%2Fg%2F11g8pbdmx8?entry=ttu=${lat},${lng}`; // Reemplaza con la latitud y longitud de tu tienda
    window.open(url, '_blank');

    // Estilo del mapa
    const containerStyle = {
        width: '100%',
        height: '400px',
        maxWidth: '1200px', // Limita el ancho máximo del contenedor
        margin: '0 auto', // Centra el contenedor horizontalmente
        padding: '20px', // Añade espacio interior
        border: '1px solid #ccc', // Añade un borde suave
        borderRadius: '10px', // Redondea las esquinas
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Añade sombra para efecto de profundidad
        backgroundColor: '#fff' // Color de fondo
      };

    // Renderiza el mapa, aqui estoy diciendo como se mostrara el mapa en la pagina web 
    return (
        <LoadScript googleMapsApiKey="TU_API_KEY">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Ubicacion;


// En el código que e proporcionado, estoy utilizando tanto una API como una URL, la API es de Google Maps y la URL es de Google Maps, la API es para poder mostrar el mapa en la página web y la URL es para que al hacer click en el mapa te redireccione a Google Maps.
