import React from 'react';
import './BeerDescription.scss'

function BeerDescription(props) {
  let style = props.selectedBeer.style || 'NA';
  let ibu = props.selectedBeer.ibu || 'NA';
  let abv = props.selectedBeer.abv || 'NA';
  return (
    <div>
    <div className='overlay' onClick={props.toggle}>
    </div>
      <div className='beer-description'>
        <h3>{props.selectedBeer.name}</h3>
        <hr />
        <div className='beer-stuff'>
          <p>Style: {style}</p>
          <p>IBU: {ibu}</p>
          <p>ABV: {abv}</p>
        </div>
        <button 
          className='click-me' onClick={props.toggle}>Close
        </button>
      </div>
    </div>
  );
}

export default BeerDescription;