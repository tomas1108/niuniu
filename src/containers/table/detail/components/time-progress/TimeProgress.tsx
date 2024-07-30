import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInterval } from "~/hooks";

type TimeProgressProps = {};

const TimeProgress: React.FC<TimeProgressProps> = () => {
  const [count, setCount] = useState<number>(60);

  useInterval(
    () => {
      // Your custom logic here
      setCount(count - 1);
    },
    count === 0 ? null : 1000
  );
  return (
    <div className="w-[46px] h-[46px] rounded-full bg-[#E8FFF5] flex justify-center items-center border-solid border-2 border-[#27E897]">
      <div className="w-[32px] h-[32px]">
        <CircularProgressbar
          minValue={0}
          maxValue={60}
          value={count}
          text={`${count}`}
          circleRatio={1}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `#0AB970`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "rotate(0.75turn)",
              transformOrigin: "center center"
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "#b5f5ec",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0.75turn)",
              transformOrigin: "center center"
            },
            // Customize the text
            text: {
              // Text color
              fill: "#0AB970",
              // Text size
              fontSize: "42px"
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7"
            }
          }}
        />
      </div>
    </div>
  );
};

export default TimeProgress;
