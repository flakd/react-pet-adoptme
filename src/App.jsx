//import React from 'react';
import Pet from './Pet';
import SearchParameters from './SearchParameters';

const App = () => {
	/* 	return React.createElement('div', {}, [
		React.createElement('h1', {}, 'Adopt Me!'),
		React.createElement(Pet, {
			name: 'Luna',
			animal: 'Dog',
			breed: 'Havanese',
		}),
		React.createElement(Pet, {
			name: 'Mia',
			animal: 'Dog',
			breed: 'Pitbull',
		}),
		React.createElement(Pet, {
			name: 'Furball',
			animal: 'Cat',
			breed: 'Alley Cat',
		}),
	]); */
	return (
		<div>
			<h1>Adopt Me!</h1>
			<SearchParameters />
			<Pet
				key='1'
				name='Luna'
				animal='Dog'
				breed='Havanese'
			/>
			<Pet
				key='2'
				name='Mia'
				animal='Dog'
				breed='pitbull'
			/>
			<Pet
				key='3'
				name='Furball'
				animal='Cat'
				breed='Alley Cat'
			/>
		</div>
	);
};
export default App;
/* const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
 */
