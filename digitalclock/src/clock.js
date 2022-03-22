import React, { useState } from "react";
function Clock() {
  let time = new Date();
  let watch = time.toLocaleTimeString();
  const [ctime, setTime] = useState(watch);
  const updateTime = () => {
    watch = time.toLocaleTimeString();
    setTime(watch);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <center>
        <h1>{ctime}</h1>
      </center>
    </>
  );
}
export default Clock;
