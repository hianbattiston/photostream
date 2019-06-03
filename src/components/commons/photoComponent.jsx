import React from "react";
import truncate from "./ truncate";

const PhotoComponent = ({ photo, styleQ }) => {
  return (
    <div className={"photo animated fadeInLeft " + styleQ}>
      <div className="ct-photos">
        <div className="image">
          <div className="ct-image">
            <a
              href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={photo.url_m} alt={photo.title} />
            </a>
          </div>
        </div>
        <div className="image-info">
          <div className="title">
            <a
              href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {truncate(photo.title)}
            </a>{" "}
            by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.flickr.com/people/${photo.owner}`}
            >
              {photo.ownername}
            </a>
          </div>
          <div className="description">
            <strong>Description:</strong> {truncate(photo.description._content)}
          </div>
          <div className="tags">
            <strong>Tags:</strong> {truncate(photo.tags)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoComponent;
