import React from 'react';
import './VideoGridHeader.sccs';

export function VideoGridHeader(props) {
  return (
    <div className='video-grid-header'>
      <span className='title'>{props.title}</span>
    </div>
  );
}
