import React from "react";
import { observer } from "mobx-react";

const FrameDetails = ({ frame, index }) => {
  const frameCumulativeScore = frame.cumulativeScore;
  return (
    <div>
      <u>Frame {index + 1} </u> <br />
      1: {frame.roll1} <br />
      2: {frame.roll2} <br />
      Score:{frameCumulativeScore}
      <br />
      <br />
    </div>
  );
};

export default observer(FrameDetails);
