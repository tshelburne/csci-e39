import React from 'react'
import {Card} from './card.jsx'

class AnimalGallery extends React.Component {
  render() {
    const hideBear = this.props.hideBear;
    const filteredAnimals = [];

    this.props.animals.forEach((animal) => {
      if (hideBear && animal.species==="bear") {
        return;
      }
      filteredAnimals.push(animal);
    })

    return(
      <ul className="gallery">
          {filteredAnimals.map((animal, index) =>
           <li key={index}>
            <Card name={animal.name}
                  image={animal.image}
                  text={animal.text}
                  species={animal.species}
             />
           </li>
         )}
      </ul>
    )
  }
}

export default AnimalGallery
