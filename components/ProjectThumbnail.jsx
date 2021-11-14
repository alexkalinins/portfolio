import React from "react";
import { v4 as uuid } from "uuid";

// array of red green blue COLORS
const COLORS = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
];

/**
 * A react function component that displays a ProjectThumbnail object.
 */
export default function ProjectThumbnail({ data }) {
  return (
    <div className="projectThumbnail">
      <div>
        <div className="subTitleDiv">
          <h3>{data.title}</h3>
          {data.timeline&&<span>{data.timeline}</span>}
        </div>
        <div>
          {data.tags.map((tag, index) => (
            <span className="tag" key={uuid()} style={{
              borderColor: COLORS[index % COLORS.length]
            }}>{tag}</span>
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
