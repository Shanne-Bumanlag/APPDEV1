function SongTwo() {
  const plays = 5;

  return (
    <div>
      <h3>Clouded</h3>
      <p>Artist: Brent Faiyaz</p>
      <p>Album: Sonder Son</p>
      <p>Released: 2017</p>
      <p>{plays * 3} plays across 3 devices</p>
    </div>
  );
}

export default SongTwo;