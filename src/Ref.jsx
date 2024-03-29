import { useEffect, useRef } from "react";

export function Ref() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current)
  }, [ref])

  return <div ref={ref}>
    Hello Ref!
  </div>
}
