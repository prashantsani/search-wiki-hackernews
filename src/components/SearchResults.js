import React from 'react'

const SearchResults = (props) => {
  if(!props.results) {
    return false
  }

  var options;
  if(props.results[0]!== undefined || props.results[0]!==[]){
    options = props.results[0].map(r => (
      <li>
        {r.name}
      </li>
    ))
  }else if(props.results[0]!==[]){
    options = 'No Results to Show'
  }
  
  return <ul>{options}</ul>
}

export default SearchResults
