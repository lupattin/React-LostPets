import { ubicationState, searchPetsById, checkUbication} from "../atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";



export function getUbication() {
  const setCrd = useSetRecoilState(ubicationState);
  const setCheckCrd = useSetRecoilState(checkUbication);

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;
    console.log(crd.latitude);
    
    setCrd({latitude:crd.latitude, longitude:crd.longitude});
    setCheckCrd({lat:crd.latitude,lon:crd.longitude})
    localStorage.setItem("coords", JSON.stringify({lat:crd.latitude,lon:crd.longitude}))
  }

  function error(err) {
    window.alert(
      "Campartir la ubicación permite el funcionamiento de la aplicación, por favor, compartir la misma."
    );
    console.warn("ERROR(" + err.code + "): " + err.message);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}

export function searchPetsByUser(){
  const searchPets = useRecoilValue(searchPetsById)
  

  return searchPets  
}







