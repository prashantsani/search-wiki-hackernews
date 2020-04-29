import React, { Component } from 'react';
import Form from './Form.js';
import SearchResults from './SearchResults.js';

class SearchApp extends Component {
  constructor(){
    super();
    this.state = {
      query: '',
      wikiResults:[],
      wikiError: null,

      hackerNewsResults:[],
      hackerNewsError: null
    };
  }

  onInputKeyDown = (e) =>{
    // Do a search Query if user presses ENTER key on keyboard
    if (e.keyCode === 13) {
        e.preventDefault();

        var val = e.target.value;

        this.setState({
          query: val
        }, () => {
          this.searchWiki(val)
        })

        return false;
    }
  }

  searchWiki = (query) =>{
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&origin=*`)
      .then(res => res.json())
      .then(response => {console.log(response); return response})
      .then(
        (result) => {
          this.setState({
            wikiResults: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <React.Fragment>
        <Form onInputKeyDown={this.onInputKeyDown} searchWiki={this.searchWiki}/>
        <SearchResults results={this.state.wikiResults}/>
      </React.Fragment>
    );
  }
}

export default SearchApp;

