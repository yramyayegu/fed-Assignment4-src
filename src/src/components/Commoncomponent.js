export default function Common_presentation_component(data) {
  return (
    <div className="App">
      <header className="App-header"> 
       { (data.data === undefined )? <h3>Loading...</h3> : <h3>{data.data}</h3> } 
      </header>
    </div>
  );
}