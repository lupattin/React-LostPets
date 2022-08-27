import React from "react";
import { Map } from "../lib/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ubicationState, cardData, checkUbication } from "../atoms";
import { Marker } from "react-mapbox-gl";
import { Pin } from "../ui/Pin";
import { searchPets } from "../atoms";


function MapBox() {
  const userLocation = useRecoilValue(ubicationState) as any;
  const petsResults = useRecoilValue(searchPets);
  const setCardData = useSetRecoilState(cardData);

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{ height: "60vh", width: "70vw", maxWidth:"900px" }}
      center={[userLocation.longitude, userLocation.latitude]}
    >
      {petsResults.map((pet) => {
        return (
          <Marker
            onClick={(e) =>
              setCardData({
                name: pet.name,
                direction: pet.street + "" + pet.level,
                userOwnerID: pet.userId,
                image: pet.image,
              })
            }
            key={pet.objectID}
            coordinates={[pet._geoloc.lng, pet._geoloc.lat]}
            center={[pet._geoloc.lng, pet._geoloc.lat]}
          >
            <Pin></Pin>
          </Marker>
        );
      })}
    </Map>
  );
}
function MapBoxSearchLocation({array}) {
/*   [userLocation.longitude, userLocation.latitude] */
const userLocation = useRecoilValue(checkUbication) as any;
  
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{ height: "30vh", width: "30vw" }}
      center={[userLocation.lon, userLocation.lat]}
      >
      {array.map((result)=>{
        
        return(
          <Marker key={1} coordinates={[result.lon, result.lat]} >
            <Pin></Pin>
          </Marker>
        )
      })}

    </Map>
  );
}

export { MapBox, MapBoxSearchLocation };
