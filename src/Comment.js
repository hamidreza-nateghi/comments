import React from 'react';

const Comment = props => {
  return (
    <div className='comment'>
      <p className='avatar'>
        <img src={props.image} alt='Avatar' />
      </p>
      <div className='content'>
        <a href='# ' className='author'>{props.author}</a>
        <div className='metadata'>{props.timeStamp}</div>
        <div className='text'>{props.children}</div>
      </div>
    </div>
  );
}

export default Comment;