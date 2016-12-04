import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''}
	}

	render() {

		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={event => setTimeout(this.onInputChange(event.target.value), 5000) } />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

// whenever input changes - run this function ** moved this function into <input > **
// onInputChange(event) {
//		this.setState({ term: event.target.value })
// 		console.log(event.target.value)
// 	}

}

export default SearchBar;