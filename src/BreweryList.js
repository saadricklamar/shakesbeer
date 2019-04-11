import React from 'react';
import Breweries from './Breweries.js'

function BreweryList(props) {
  return (
    <div>
      {
        props.filteredBreweries.map(brewery => {
          return (
            <Breweries name={brewery.name}
                       dataset={props.dataset}
                       starredBreweries={props.starredBreweries}
                       updateStarredList={props.updateStarredList}
                       key={Date.now()}
            />
          )
        })
      }
    </div>
  )
}

export default BreweryList;