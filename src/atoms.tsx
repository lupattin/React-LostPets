import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
const BASE_URL_API = "https://lostpetsapp.herokuapp.com";
/* All Offcanvas States to Open and close components */

export const offcanvasSignInState = atom({
  key: "offcanvasSignInState",
  default: false
});
export const offcanvasSignUpState = atom({
  key: "offcanvasSingUpState",
  default: false
});
export const offcanvasMyDataState = atom({
  key: "offcanvasMyDataState",
  default: false
});
export const offcanvasReportPetState = atom({
  key: "offcanvasReportPetState",
  default: false
});
export const offcanvasMyReportedPetsState = atom({
  key: "offcanvasMyReportedPetsState",
  default: false
});
export const offcanvasFoundPet = atom({
  key: "offcanvasFoundPet",
  default: false
});

/* User Atoms So you can have all the data of the user */
export const userState = atom({
  key: "userState",
  default: {},
  effects_UNSTABLE: [persistAtom]
});
export const userNameState = atom({
  key: "userNameState",
  default: {},
  effects_UNSTABLE: [persistAtom]
});

/* User Ubication */
export const ubicationState = atom({
  key: "ubicationState",
  default: {},
  effects_UNSTABLE: [persistAtom]
});
export const checkUbication = atom({
  key: "checkUbication",
  default: {lat:"",lon:""}
});
/* Data of the pet selected in the map */
export const cardData = atom({
  key: "cardData",
  default: {name:"Tu Mascota", direction: "Direccion donde se encontro", userOwnerID:"", image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAMFBMVEXv7+/MzMzx8fHNzc3j4+PR0dHJycns7OzW1tbT09Po6Oja2tri4uLZ2dnm5ubd3d0xSip/AAAE1ElEQVR4nO2ci5LjKAxFjTBgjB///7fLy0nsWGymt3t7xd4zVVMz7WQqJ5JBgDzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP8V9KVLfeD6V+Shge7pPvA0LyODI/fbn+5HIW85lF1++9P9JBTVFYu1S8dJT5s1vLvSpl93GtYSdm3NCW11ifxGvdqT00pn9XC+4EK9FSbqUz7ObbvV2V1dZjMajrSfu1B/lXBUfuBz2JX2F3VH9Yrau3CPg7qr1Dym8Yjuu2HNCKv/9Y/5E9D2GNJNzmSi6Zjgtre4z8dIMPYQ+DSVl6JF25zjNNfRPBYx12qWlhJ3pbXwwS7JDI8Ej4ms0tw1mmddM53wk39O8n5jin0R1T7RvE4mKh+uMQGM1y8VnX6r6F7+rL254M00kwj1geJsbU9+On0TWl+VWfQVawM5AfKxcL2E993586/h+BfsJkB9eA7n34mdRLi3litfx0txb6e0TpN5WrE/h4C3wUA/Z4HDXYD8R3G3fh/nXPDNS0hvsPYsvz+ntzI3iljfkr+TPYmr/ahzU00Xi9/17SXji7uS496Oe8z3EH3dUOqV9Hvaut3Pcbdj+nFBUtwb7tZoa24nanLmND2sRzETF/19uEf7cP+m+CucQ3/8pY4E8t3t/nzdS6ledu33881RUZLizo91+rlyJzeG+ELj181Rze9UDLOzowx3Pu52GsqCjNx+rGdjpR/qGi2t8IW783E3x0J0qVmd4hwXKurYmHd8oS/DnYl7XcYn+1B3Kur2XanWc+JvbOBFu+d5Kyf8XWb78l5auYWQcPe8beeS+pu7tWu55WfuzbLdp1LILfdX8y5lSgrR7sxYl8rUiLv9avQj6xfmjpfhzsS9bL1HN8a9HkE70e5M3MsCnPilvc5bclzSy3Bn4r7n6c3xpZsth3H7/Ugvw/0+7nlFzt/OiVLh3N8UQtzv425T2e4oNLZow/n4piv3XLGz5sckKNqdyfm/dy91H1PdyHBvxH2gt525l1fkbQ3Z7kzcy0E0M4qrdP6815wX7M7EfcmLuLHhno+dmOJHiDtT25TFimvUNsddIXisY2obnxfoje7CKfeUkrmfBUW76zlf5Xcntty04JgTLRnu3Dqu7FOyl1PYiR8MZbhz6/fy6Z1jLpcjC9JMvS/DndurLCP9kDYvroeuWtU+Yn4ekOHOxd16l4/YbmYxW7+XYdCy3fk96nTHp8F8u3w91o/leIJCr/u0pbZLQ5pbVe2oThs2KpRa33HrmB7ctXFUnhWiec09pKn1MMzHmZzjBjox7o3eg5cD6Bjmcd+XcX48JUTOaL5dRYZ7I+5R/tklWNtJh2yeui/YcU6Oe7PnxJrxrkUy3utbI+HFuDd7D2Jsw9U9nb27oNrtWR24p8NXvVweDSG3pHxvdqb14J6wJmxDuduT0Ryad3pX7uUJCb8u27gsq1fqkybUTtwf/rY0j+tPeouNkL7KxvnDw/0PO6mt/22vT7i0S30TOggIezpl/iDuf+wu4xlpNxv2YeevcSoH/9vQMHPPuH+NZZYw0CXcwP3PBv+A35b6kO/PTinmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/yFy52KVzDeqD5AAAAAElFTkSuQmCC"}
});

/* Pets reported by the users */
export const petsFound = atom({
  key: "petsFound",
  default: [],
  effects_UNSTABLE: [persistAtom]
});
export const searchPets = selector({
  key: "searchPets",
  get: async ({ get }) => {
    const coordinates = get(ubicationState) as any
    
    const results = await fetch(BASE_URL_API + "/pets-near-direction?lat=" + coordinates.latitude + "&lng=" + coordinates.longitude )
    const resultsJson = await results.json()
    return resultsJson
    
  },
});

/* Pets report By one User */

export const searchPetsById = selector({
  key: "searchPetsById",
  get: async ({ get }) => {
    const userData = get(userState) as any
    
    const results = await fetch(BASE_URL_API + "/pets-by-user?userId=" + userData.user.id)
    const resultsJson = await results.json()
    return resultsJson
    
  },
});

/* Search coordinates from a direction */

export const directionData = atom({
  key: "directionCoordinates",
  default: {direction:"", streetLevel:"", city:""}
});

export const searchDirectionCoordinates = selector({
  key: "searchDirectionCoordinates",
  get: async ({ get }) => {
    const data = get(directionData)
    
    const results = await fetch("https://nominatim.openstreetmap.org/search?street=" + data.streetLevel + " " + data.direction + "&city=" + data.city + "&format=json")
    const resultsJson = await results.json()
    return resultsJson
    
  },
});

/* Pet URL image */

export const petURLImage = atom({
  key: "petURLImage",
  default: ""
});




