import React from 'react'

const SearchListItem = (props) => {
  return (
    <li>
      <a href={props.url}>
        {props.title}
      </a>
    </li>
  )
}

export default SearchListItem
