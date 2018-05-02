import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input className='tc ba b--green bg-lightest-blue'
			type='search'
			placeholder='seach robots'
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;