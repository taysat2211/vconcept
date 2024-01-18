import React from 'react'

function Card(props) {
    const {image,title} = props.design;
  return (
    <div className={"card text-center h-50"}>
        <img src={image} className="card-img-top" alt="thumb"></img>
        <div className="card-body">
          <h3 className='card-title'>{title}</h3>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Card