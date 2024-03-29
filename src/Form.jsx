import { useState } from "react";

export function Form() {
  const [value, setValue] = useState('');
  return (
    <div>
      <div>
        <label htmlFor="blah">Name</label>
        <input id="blah" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
}
