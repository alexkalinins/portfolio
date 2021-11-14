import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { v4 as uuid } from "uuid";
import jstat from "jstat"

const COLORS = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
];

// range of distance from the center (radius)
const MIN = 200;
const MAX = 3000;

// range of size
const MIN_SIZE = 15;
const MAX_SIZE = 20;

const CIRCLE_COUNT = 50;

// array of 10 numbers
const array = [...Array(CIRCLE_COUNT).keys()];

const Circle = () => {
  let r = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  
  let theta = jstat.normal.sample(0.3,0.2) * 2 * Math.PI;

  let x = r * Math.cos(theta);
  let y = r * Math.sin(theta);

  const { scrollYProgress } = useViewportScroll();
  const xTransform = useTransform(scrollYProgress, [0, 0.5], [0.005*x, x]);
  const yTransform = useTransform(scrollYProgress, [0, 0.5], [0.005*y, y]);

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5],
    [1, 0.3, 0.25]
  );

  const filter = useTransform(
    scrollYProgress,
    v=>`blur(${v*10}px) hue-rotate(${v*360}deg)`,
  );

  // generate random size of circle
  const size = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE;

  return (
    <motion.div
      className="circleContainer"
      style={{
        translateX: xTransform,
        translateY: yTransform,
        opacity: opacityTransform,
        filter
      }}
    >
      <div className="circle" style={{
        width: size + "rem",
        height: size + "rem",
        backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
      }}/>
    </motion.div>
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
