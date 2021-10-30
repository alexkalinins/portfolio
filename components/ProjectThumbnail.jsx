import React from "react";

/**
 * A 'thumbnail' for a project. Takes in a data object. Displays the project's title, category, and image.
 */
export default function ProjectThumbnail({ data }) {
  return (
    <div className="projectThumbnail">
      <div>
        <img src={data.image} alt={data.name} />
      </div>
      <div>
        <div>{data.title}</div>
        <div>{data.category}</div>
      </div>
    </div>
  );
}
