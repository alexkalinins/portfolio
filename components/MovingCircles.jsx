import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { v4 as uuid } from "uuid";

const COLORS = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
];

const MIN = 100;
const MAX = 1000;

// the random size of the circles in REM
const MIN_SIZE = 10;
const MAX_SIZE = 15;

const CIRCLE_COUNT = 75;

// array of 10 numbers
const array = [...Array(CIRCLE_COUNT).keys()];

const Circle = () => {
  let x = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  let y = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

  // randomly make x a positive or negative number
  x *= Math.random() < 0.5 ? -1 : 1;
  y *= Math.random() < 0.5 ? -1 : 1;

  const { scrollYProgress } = useViewportScroll();
  const xTransform = useTransform(scrollYProgress, [0, 0.5], [0, x]);
  const yTransform = useTransform(scrollYProgress, [0, 0.5], [0, y]);

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    [1, 1, 0.25]
  );

  // generate random size of circle
  const size = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE;

  return (
    <motion.div
      className="circle"
      style={{
        width: size + "rem",
        height: size + "rem",
        backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
        translateX: xTransform,
        translateY: yTransform,
        opacity: opacityTransform,
      }}
    />
  );
};

export default function MovingCircles() {
  return (
    <div className="movingCircles">
      <Circle />
      {array.map((_) => {
        return <Circle key={uuid()} />;
      })}
    </div>
  );
}
