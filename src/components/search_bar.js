import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	render() {
		return <input onChange={(event) => console.log(event.target.value)} />
	}

// whenever input changes - run this function ** moved this function into line 6
	// 	onInputChange(event) {
	// 		console.log(event.target.value);
	// 	}
	// }
}

export default SearchBar;