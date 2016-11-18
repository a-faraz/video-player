import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''}
	}

	render() {

		return (
			<div>
				<input 
				value={this.state.term}
				onChange={(event) => this.setState({ term: event.target.value}) } />
				{console.log("value: ", this.state.term)}
			</div>
		)
	}

// whenever input changes - run this function ** moved this function into line 6 **
// onInputChange(event) {
// 		console.log(event.target.value);
// 	}

}

export default SearchBar;