import React from 'react'

	// same as const video = props.video
	// same as const onVideoSelect = props.onVideoSelect
	// props.video comes from video_list component
const VideoListItem = ({video, onVideoSelect}) => {

	console.log(video);
	const title = video.snippet.title
	const thumbnail = video.snippet.thumbnails.default.url
	
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
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