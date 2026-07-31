function SongOne() {
  const plays = 3;

  return (
    <div>
      <h3>Break from Toronto</h3>
      <p>Artist: PARTYNEXTDOOR</p>
      <p>Album: PARTYNEXTDOOR</p>
      <p>Released: 2013</p>
      <p>{plays * 3} plays across 3 devices</p>
    </div>
  );
}

export default SongOne;