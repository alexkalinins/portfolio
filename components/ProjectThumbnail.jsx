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
    return (<img className="lg:max-w-[40vw] lg:pt-0 pt-10 h-auto justify-self-start max-w-full" src={data.image} alt={data.title} />)
  }, [data.title, data.image]);


  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 border-2 border-white border-solid rounded-2xl p-12 justify-items-stretch items-center grap-8">
      <div className="flex flex-col items-start justify-evenly">
        <h3 className="text-6xl p-0">{data.title}</h3>
        {data.timeline && <span className="-mt-14 mb-8 text-xl text-left justify-self-start">{data.timeline}</span>}
      </div>

      <div className="flex flex-row space-x-6">
        {data.tags.map((tag, index) => (
          <span className="tag text-xl" key={uuid()} style={{
            borderColor: COLORS[index % COLORS.length]
          }}>{tag}</span>
        ))}
      </div>

      <MemoImage />

      <div className="flex flex-col mx-4">
        <p>{data.description}</p>
        <div className="flex flex-row flex-wrap justify-items-start items-center space-x-4">
          {data.github && <SocialButton url={data.github} title="GitHub" />}
          {data.demo && <SocialButton url={data.demo} title="Demo" />}
        </div>
      </div>

    </div>


  );


}
