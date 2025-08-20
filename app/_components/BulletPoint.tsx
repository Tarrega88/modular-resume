import { useState } from "react";

function BulletPoint() {
  const [isInput, setIsInput] = useState(false);

  return isInput ? <input /> : <div></div>;
}

export default BulletPoint;
