import React from 'react'

const SearchBar = ({placeholder, btnText, searchStyle}) =>
	<div className={searchStyle}>
		<input type='text' placeholder={placeholder} />
		<button type='submit'>{btnText}</button>
	</div>

export const Search = ({placeholder, btnText}) =>
	<SearchBar placeholder={placeholder} btnText={btnText} searchStyle='search'></SearchBar>

Search.displayName = 'Search'
