import React from 'react'

// same as - const video = props.video
const VideoDetail = ({video}) => {

// some parent objects cannot fetch data fast enough to handle the needs of the child object
// so therefore we provide a test before grabbing the id of the prop
	if(!video) {
		return <div>loading...</div>
	}
	
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`

	return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="details">
					<div className="details-title">{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
				</div>
			</div>
		);
};


export default VideoDetail;