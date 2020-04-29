import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();
    this.searchInput = React.createRef();
  }


  searchQuery = (e) =>{
    e.preventDefault();
    
    this.props.searchWiki(this.searchInput.current.value)

    return false
  }

  render() {
    return (
      <form id="user-search" className="user-search" onSubmit={this.searchQuery}>
        <fieldset>
          <input 
                type="text" ref={this.searchInput} 
                className="user-search__input" 
                onKeyDown={this.props.onInputKeyDown} />
                
          <input 
                type="submit" className="user-search__search" 
                onClick={this.searchQuery} 
                value="SEARCH" />

        </fieldset>
      </form>
    );
  }
}

export default Form;
