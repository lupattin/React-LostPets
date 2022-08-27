import React from "react"
import { CardMyPetsComponent } from "./Card"
import { useRecoilValue } from "recoil"
import { petsFound } from "../atoms"






function PetsReported(){
 const results = useRecoilValue(petsFound)
  return(
    <div>
        {results.map((pet)=>(
          <CardMyPetsComponent petId={pet.id} key={pet.id} name={pet.name} direction={pet.street} level={pet.level} image={pet.image} city={pet.city} ></CardMyPetsComponent>
          ))}
      </div>
    )
}

export {PetsReported}