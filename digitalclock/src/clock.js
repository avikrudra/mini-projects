import React, { useState, useEffect } from "react";
function Clock() {
  let time = new Date();
  let watch = time.toLocaleTimeString();
  const [ctime, setTime] = useState(watch);
  useEffect(() => {
    setTimeout(() => {
      watch = time.toLocaleTimeString();
      setTime(watch);
    }, 1000);
  });
  return (
    <div style={{ marginTop: "200px" }}>
      <center>
        <h1>{ctime}</h1>
      </center>
    </div>
  );
}
export default Clock;
