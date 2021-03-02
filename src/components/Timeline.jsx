import React from 'react';

//destructuring the chirp prop, could also just say props.chirp without curlies
const Timeline = ({ chirp }) => {
  return (
    <div className="bg-light card border-0">
      <div className="card-body">
        <h5 className="card-title">{chirp.username}</h5>
        <p className="card-text">{chirp.message}</p>
        <p className="text-muted">{chirp.createdAt}</p>
        <hr></hr>
      </div>
    </div>
  );
};

export default Timeline;
