import React, { Component } from 'react';
import Form from './Form.js';
import SearchResults from './SearchResults.js';

class SearchApp extends Component {
  constructor(){
    super();
    this.state = {
      searchResults:[

      ],
      error: null
    };
  }

  onInputKeyDown = (e) =>{
    // Do a search Query if user presses ENTER key on keyboard
    if (e.keyCode == 13) {
        e.preventDefault()
        
        this.searchQuery()

        return false;
    }
  }

  searchQuery = (e) =>{
    

    // fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchQuery}halodoc&origin=*`)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         searchResults = result
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         error
    //       });
    //     }
    //   )
  }

  render() {
    return (
      <React.Fragment>
        <Form onInputKeyDown={this.onInputKeyDown} searchQuery={this.searchQuery} />
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default SearchApp;
