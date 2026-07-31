function SongThree() {
  const plays = 7;

  return (
    <div>
      <h3>Ivy</h3>
      <p>Artist: Frank Ocean</p>
      <p>Album: Blonde</p>
      <p>Released: 2016</p>
      <p>{plays * 3} plays across 3 devices</p>
    </div>
  );
}

export default SongThree;