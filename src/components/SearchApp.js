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

        this.setState({
          query: e.target.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.searchWiki(this.state.query)
            }
          } else if (!this.state.query) {
          }
        })

        return false;
    }
  }

  searchWiki = (query) =>{
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&origin=*`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
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
        <Form onInputKeyDown={this.onInputKeyDown} searchWiki={this.searchWiki} />
        <SearchResults results={this.state.wikiResults}/>
      </React.Fragment>
    );
  }
}

export default SearchApp;

