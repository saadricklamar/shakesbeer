import React from 'react';
import './BeerDescription.scss'

function BeerDescription(props) {
  return (
    <div className='beer-description'>
      <h3>{props.selectedBeer.name}</h3>
      <div className='beer-stuff'>
        <p>Style: {props.selectedBeer.style}</p>
        <p>IBU: {props.selectedBeer.ibu}</p>
        <p>ABV: {props.selectedBeer.abv}</p>
      </div>
      <p className='click-me'
         role='button'
         onClick={props.toggle}>Click ME!
      </p>
    </div>
  );
}

export default BeerDescription;