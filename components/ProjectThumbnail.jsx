import React from "react";

/**
 * A react function component that displays a ProjectThumbnail object.
 */
export default function ProjectThumbnail({ data }) {
  return (
    <div className="projectThumbnail">
      <div>
        <h2>{data.title}</h2>
        <div>
          {data.tags.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div>
        <img src={data.image} alt={data.title} />
        <p>{data.description}</p>
      </div>
    </div>
  );
}
