export default function SideResumeInner() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "850px",
        minHeight: "1100px",
        fontSize: "16px",
        lineHeight: 1.4,
        // overflowY: "auto",
      }}
    >
      {Array.from({ length: 52 }, (_, i) => (
        <div key={i}>
          ABCDEFGHIJKLNOPQRSTUVWXYZ ABCDEFGHIJKLNOPQRSTUVWXYZ
          ABCDEFGHIJKLNOPQRSTUVWXYZ ABDEF
        </div>
      ))}
    </div>
  );
}
