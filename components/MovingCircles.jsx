import React from "react";
import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion";

const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
];

const Circle = () => {
//   const controls = useAnimation();
//   React.useEffect(() => {
//     controls.start({
//       x: 0,
//       transition: {
//         duration: 1,
//         ease: "easeInOut",
//       },
//     });
//   }, [controls]);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress,[-200,0,10],[0,100,0]);

  return (
    <motion.div
      className="circle"
      style={{ backgroundColor: colors[0], translateY: scrollYProgress }}
    //   initial={{opacity: 0, x: -10}}
    //     animate={controls}
    ></motion.div>
  );
};

export default function MovingCircles() {
  return (
    <div className="movingCircles">
      <Circle />
    </div>
  );
}
