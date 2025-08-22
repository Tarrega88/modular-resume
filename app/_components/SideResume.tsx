"use client";

function SideResume() {
  //80 dpi pixel sizes:
  // const width = "w-[680px]";
  // const height = "min-h-[880px]";

  //100 dpi

  //TODO 8/21/2025: implent scalar that adapts sizes of all elements based on the sizing ratio of what I have listed below

  const width = "w-[850px]";
  const height = "min-h-[1100px]";

  return (
    <div className={`bg-white overflow-auto ${height} ${width}`}>
      {Array.from({ length: 45 }, (e, i) => (
        <div key={i}>{String.fromCharCode((i % 26) + 97)}</div>
      ))}
    </div>
  );
}

export default SideResume;
