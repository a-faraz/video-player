import React from 'react'

	// same as const video = props.video
	// props.video comes from video_list component
	const VideoListItem = ({video}) => {

	const title = video.snippet.title

	return (
		<li className="list-group-item">
			<div className="video-list media"> 
				<div className="media-left">
					<img className="media-object"/>
				</div>

				<div className="media-body">
					<div className="media-heading"></div>
				</div>
			</div>
		</li>
	);

}

export default VideoListItem;