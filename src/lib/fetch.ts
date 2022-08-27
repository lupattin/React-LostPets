const BASE_URL_API = "https://lostpetsapp.herokuapp.com";

export async function fetchUserData(email, password) {
  const results = await fetch(BASE_URL_API + "/auth/token", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return results;
}
export async function fetchSignUp(name, email, password) {
  const results = await fetch(BASE_URL_API + "/auth", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      
      return data;
    });
  return results;
}
export async function fetchUpdateUser(name, email, newpassword, userToken, emailToSearch) {
  
  const results = await fetch(BASE_URL_API + "/user", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer" + `"` + userToken + `"`,
    },
    body: JSON.stringify({ name, email , emailToSearch, newpassword }),
  })
  const resultsJson = await results.json()
  return resultsJson;
}

export async function fetchCheckDirection(direction, streetLevel, city){

  const results = await fetch("https://nominatim.openstreetmap.org/search?street=" + streetLevel + " " + direction + "&city=" + city + "&format=json")
  const resultsJson = await results.json()

  return resultsJson
}
export async function fetchReportNewPet(name, street, level, city, lng, lat, userData, image){
  
 
  const results = await fetch(BASE_URL_API + "/pet", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer" + `"` + userData.token + `"`,
    },
    body: JSON.stringify({
      name,
      street,
      level,
      city,
      _geoloc: { lng:+lng, lat:+lat },
      userId:userData.user.id,
      image,
    }),
  })
  const resultsJson = await results.json()

  return resultsJson
}

export async function fetchUpdatePetData(key, direction,streetLevel,city, token, name, userId, image) {
  const newCoords = await fetch("https://nominatim.openstreetmap.org/search?street=" +  streetLevel + " " +  direction +  "&city=" + city + "&format=json" )
  const newCoordsJson = await newCoords.json()
  
  const result = await fetch(BASE_URL_API + "/pet", {method: "PATCH", headers: {"content-type": "application/json", authorization: "Bearer" + `"` + token + `"`},
    body: JSON.stringify({
      id:key,
      name,
      street:direction,
      level:streetLevel,
      city,
      _geoloc: { lng:newCoordsJson[0].lon, lat:newCoordsJson[0].lat },
      userId,
      image,
    }),
  })
  return result
  
  
}
export async function fetchEliminatePet(petId, token) {
  const result = await fetch(BASE_URL_API + "/pet", {method: "DELETE", headers: {"content-type": "application/json", authorization: "Bearer" + `"` + token + `"`},
  body: JSON.stringify({
    id:petId,
  })})
  return result
}

export async function fetchReportFoundPet(userID, token, petname, username, phone, where) {
  const emailToReport = await fetch(BASE_URL_API + "/user-by-id?userId=" + userID)
  const emailToReportJson = await emailToReport.json()
  const email = emailToReportJson.email
  
  const result = await fetch(BASE_URL_API + "/report-pet", {method: "POST", headers: {"content-type": "application/json", authorization: "Bearer" + `"` + token + `"`},
    body: JSON.stringify({
      to: email,
      petname,
      username,
      phone,
      where
    }),
  })
  
  return result
}

export async function fetchPetsByUser(userId){
  const results = await fetch(BASE_URL_API + "/pets-by-user?userId=" + userId)
  const resultsJson = await results.json()

  return resultsJson
}