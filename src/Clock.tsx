import { useState } from 'react'

function Clock() {
  console.log("Clock");
  const [time, setTime] = useState<Date>(new Date());
  return (
    <div id='Clock'>
      <p>{ time.toLocaleTimeString() }</p>
      <button type="button" onClick={() => setTime(new Date())}>클릭</button>
    </div>
  );
}

export default Clock;