import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card--content">
        <div className="card--map-details">
          <img
            src="./images/map-marker.png"
            alt="map marker"
            className="card--map-marker"
          />
          <span className="card--location">{props.location.toUpperCase()}</span>
          <a href={props.googleMapsUrl} className="card--map-link">
            View on Google Maps
          </a>
        </div>
        <p className="bold card--title">{props.title}</p>
        <p className="bold card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
