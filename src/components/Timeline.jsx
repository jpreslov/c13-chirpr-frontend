import React from 'react'

//destructuring the chirp prop, could also just say props.chirp without curlies
const Timeline = ({ chirp }) => {
    return (
        <div className="card m-5">
        <div className="card-body">
          <h5 className="card-title">{chirp.username}</h5>
          <p className="card-text">{chirp.message}</p>
        </div>
      </div>
    )
}

export default Timeline
