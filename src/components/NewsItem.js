import React from 'react'

export default function NewsItem(props) {

  return (
    <div className="container my-3">
        <div className="card" style={{width: "18rem"}}>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'0.5'}}>
              {props.source}
            </span> 
          <img src={!props.imageUrl?"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg":props.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title} 
                </h5>
                <p className="card-text">{!props.description?"...":props.description.slice(0,50)+"..."}</p>
                <p className="card-text"><small className="text-body-secondary">By {!props.author?"unknown":props.author} on {new Date(props.date).toGMTString()}</small></p>
                <a href={props.href} className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
    </div>
  )
}
