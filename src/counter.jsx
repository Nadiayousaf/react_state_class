import { useState } from "react";

export default function Counter() {

  let arr = useState(10);

  console.log(arr);

  return (
    <div>
      <h3>Count = {arr[0]}</h3>

      <button>
        Increase Count
      </button>
    </div>
  );
}