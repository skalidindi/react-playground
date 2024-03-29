import { useState } from "react";
import { useEffect } from "react";

export function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setTimeout(() => {
        setCount(count + 1);
    }, 1000);

    //Clearing the interval
    return () => {
      console.log('destroying interval...');
      clearTimeout(interval)
    };
}, [count]);

  return <div>{count}</div>
}
