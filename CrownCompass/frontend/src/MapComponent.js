import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const MapComponent = ({ initialCoordinates, zoomLevel, markers }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDm1hHjMZhRcljlWYLdqgbHyoW8dIwDa5s"
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(initialCoordinates);
        map.fitBounds(bounds);

        // Add markers
        markers.forEach(markerInfo => {
            new window.google.maps.Marker({
                position: markerInfo.coordinates,
                map: map,
                title: markerInfo.title
            });
        });

        setMap(map);
    }, [initialCoordinates, markers]);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={initialCoordinates}
            zoom={zoomLevel}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <div>Loading...</div>;
};

export default MapComponent;
