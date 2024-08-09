import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MapsStyleDiv } from "./style";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAtdhpcaTUaO0ivK01ZkUL_KZgxjwclJmo",
  });
  const locations = { lat: -23.621256, lng: -45.412624 };

  return (
    <MapsStyleDiv>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={locations}
          zoom={20}
        >
          <Marker
            position={locations}
            options={{
              label: {
                text: "Atual Sindico",
                className: "marker_pointer",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </MapsStyleDiv>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Maps);
