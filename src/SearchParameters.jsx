import {useState} from 'react';

/* // dont't do the below
    let counter1 = 0;
 */
const SearchParameters = () => {
	const [location, setLocation] = useState('');
	/*
  //don't do the below
	counter1++;
 */
	const locationChangeHandler = (e) => {
		e.preventDefault();
		setLocation(e.target.value);
	};
	return (
		<div className='search-params'>
			<form>
				<label htmlFor='location'>
					<input
						id='location'
						value={location}
						placeholder='Location'
						onChange={locationChangeHandler}
					/>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default SearchParameters;
