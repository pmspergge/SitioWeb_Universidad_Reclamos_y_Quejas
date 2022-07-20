import React from 'react'
import ImagenPrincipal from "../principal.svg"
import "../Style/main.css"
export default function Main() {
  return (
    <div className='container_information_principal'>
        <div className="container_text_description">
          <h1 className='title_principal'>
            Presenta un reclamo o queja
          </h1>
          <p className='description_principal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vel dolorum exercitationem aliquam rerum ex deleniti nesciunt eveniet ab tenetur beatae reiciendis quae iste optio deserunt, omnis magnam minus voluptatibus quas, ipsa dignissimos et dolore aspernatur? Sapiente hic dolores incidunt quidem nam impedit consequatur magni laboriosam culpa perferendis! Cumque beatae officiis inventore numquam? Omnis laudantium possimus rerum velit, quis sit. Ducimus nisi ea nobis eligendi maxime laborum dolorum saepe, mollitia quidem minima unde hic illum rem quis ipsum aut libero, culpa accusantium, necessitatibus quo. Doloremque quo fuga odit omnis quos! Fuga enim reiciendis sit beatae laboriosam soluta quibusdam ea deleniti?</p>
        </div>
        <div className="container_image_principal">
          <img src={ImagenPrincipal} alt="Imagen principal" title="Presentación" />
        </div>
    </div>
  )
}
