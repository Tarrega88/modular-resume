function BulletList() {
  //temporary bullets - will pull from db
  const bullets = [];
  return bullets.map((e) => <BulletPoint />);
}

export default BulletList;
