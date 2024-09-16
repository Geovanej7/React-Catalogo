import React, { useEffect } from 'react';

function Maps() {
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          initMap();
        };
      } else {
        initMap(); 
      }
    };

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -8.154526325191714, lng: -34.955992577306226 },
        zoom: 16,
      });

      new window.google.maps.Marker({
        position: { lat: -8.154526325191714, lng: -34.955992577306226 },
        map: map,
        title: 'Muribeca!',
      });
    };

    loadGoogleMaps();
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
}

export default Maps;
