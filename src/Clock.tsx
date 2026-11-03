import { useEffect, useState } from 'react'

function Clock() {
  console.log("Clock");
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const id = setInterval(() => { console.log("tick"); setTime(new Date()); }, 1000); 
    return () => { console.log("Clock unmount"); clearInterval(id); }
  }, []);
  return (
    <div id='Clock'>
      <p>{ time.toLocaleTimeString() }</p>
    </div>
  );
}

export default Clock;