import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card h-100 d-flex flex-column ">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger ">{source}</span>
        </div>
        <img
          style={{ height: "180px", objectFit: "cover" }}
          src={imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark mt-auto"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
