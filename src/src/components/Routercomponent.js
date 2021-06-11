import {  BrowserRouter as Router,  Switch,  Route,  Redirect,  Link } from "react-router-dom";
import Songlist from './Songlist'
import NewSonglist from './NewSonglist'
import Songdetails from './Songdetails'
import Addsong from './Addsong'
import Commoncomponent from './Commoncomponent'

function Routercomponent(props) {
  let titledata = props.titledata;
  let aboutdata = props.aboutdata;
  let songdata = props.songdata;
  return (
    <div>
     <Router>
      <div>
	  	<h1>{titledata.data.title}</h1>
		<h3>{titledata.data.subtitle}</h3>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Songlist">Song List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/"><Redirect to="/home" /></Route>
          <Route path="/home"> <Commoncomponent data={"Welcome to Wipro music"} /> </Route>
          <Route path="/about"> <Commoncomponent data={aboutdata.title} /> </Route>
          <Route path="/Songlist"> <Songlist data={songdata}  /> </Route>
          <Route path="/NewSonglist"> <NewSonglist /> </Route>
          <Route path="/add_song"> <Addsong data={songdata} /> </Route>
		      <Route path="/songdetails" ><Songdetails /> </Route>
		      <Route path="**"> <Commoncomponent data={'404 Page Not Found.'} /> </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
export default Routercomponent