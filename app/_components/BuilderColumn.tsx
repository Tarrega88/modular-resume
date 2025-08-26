import { MAX, MIN, useScale } from "../_context/ScaleContext";
import BulletSelect from "./BulletSelect";

function BuilderColumn() {
  const { scale, setScale } = useScale();
  // function handleSetScale() {
  //   setScale(scale )
  // }

  function handleSetScale(direction: number) {
    //0.8 * 10: 8
    //1 * 1.25: 1.25
    if (
      (scale === MAX && direction === 1) ||
      (scale === MIN && direction === -1)
    )
      return;
    setScale((prev: number) => (prev * 10 + direction * 1.25) / 10);
  }

  return (
    <div className="w-64 bg-blue-500">
      <div>Col A</div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-emerald-500 cursor-pointer"
          onClick={() => handleSetScale(-1)}
        >
          - Scale
        </button>
        <div>{scale * 100}%</div>
        <button
          className="bg-emerald-500 cursor-pointer"
          onClick={() => handleSetScale(1)}
        >
          + Scale
        </button>
      </div>

      <BulletSelect />
    </div>
  );
}

export default BuilderColumn;
