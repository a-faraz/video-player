import React from 'react'

	// same as const video = props.video
	// props.video comes from video_list component
	const VideoListItem = ({video}) => {

	console.log(video);
	const title = video.snippet.title
	const thumbnail = video.snippet.thumbnails.default.url
	
	return (
		<li className="list-group-item">
			<div className="video-list media"> 
				<div className="media-left">
					<img className="media-object" src={thumbnail}/>
				</div>

				<div className="media-body">
					<div className="media-heading">{title}</div>
				</div>
			</div>
		</li>
	);

}

export default VideoListItem;