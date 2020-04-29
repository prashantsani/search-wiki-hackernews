import React from 'react';
import SearchListItem from './SearchListItem.js';

const SearchResults = (props) => {
  if(props.results[0]===undefined) {
    return false
  }

  var options =[];

  if(props.results[0]!== undefined || props.results[0]!==[]){
    for(let a = 0; a< props.results[1].length; a++){
      options.push(<SearchListItem url={props.results[3][a]} key={props.results[1][a].replace(' ','-').toLowerCase()} title={props.results[1][a]}/>)
    }
  }else if(props.results[0]!==[]){
    options = 'No Results to Show'
  }
  
  return <ul className="search-results">{options}</ul>
}

export default SearchResults
