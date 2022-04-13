import React, { memo } from "react";
import { v4 as uuid } from "uuid";
import SocialButton from "./SocialButton";

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

  let MemoImage = memo(() => {
    return (<img className="max-w-[40vw] h-auto justify-self-start " src={data.image} alt={data.title} />)
  }, [data.title, data.image]);


  return (
    <div className="projectThumbnail">
      <div className="subTitleDiv">
        <h3>{data.title}</h3>
        {data.timeline && <span>{data.timeline}</span>}
      </div>

      <div className="tagDiv">
        {data.tags.map((tag, index) => (
          <span className="tag" key={uuid()} style={{
            borderColor: COLORS[index % COLORS.length]
          }}>{tag}</span>
        ))}
      </div>

      <MemoImage />

      <div className="flex flex-col mx-4">
        <p>{data.description}</p>
        <div className="thubButtonDiv">
          {data.github && <SocialButton url={data.github} title="GitHub" />}
          {data.demo && <SocialButton url={data.demo} title="Demo" />}
        </div>
      </div>

    </div>


  );


}
