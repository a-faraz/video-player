import React from 'react'
// props in functional component
// this.props in class component
const VideoList = (props) => {
	return (
		<ul className="col-md-4 list-group" >
		{props.videos}
		</ul>
	);
}


export default VideoList;