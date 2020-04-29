import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form id="user-search" className="user-search">
        <input type="text" className="user-search__input" onKeyDown={this.props.onInputKeyDown} />
        <button className="user-search__search" onClick={this.props.addSelectedBook}>SEARCH</button>
      </form>
    );
  }
}

export default Form;
