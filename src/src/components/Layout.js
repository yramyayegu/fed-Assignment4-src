import {useState} from "react" 
import Commoncomponent from './Commoncomponent'
import Routercomponent from './Routercomponent'
const axios = require('axios');
export default function Layout() {
let [titledata,settitledata] = useState([])
let [aboutdata,setaboutdata] = useState([])
let [songdata,setsongdata] = useState([])

async  function GetRequest() {
	var titleresult = null;
	var aboutresult = null;
	var songlistresult = null;
	
	await axios.get('http://localhost:3000/title')
	.then(function (response) {titleresult ={status:true, data :  response.data}})
	.catch(function (error) {titleresult = {status:false, error : "Error while loading..."} } );
		
	await axios.get('http://localhost:3000/about')
	.then(function (response) {	aboutresult = response.data;	})
	.catch(function (error) { aboutresult = "Error while loading...";	});
		
	await axios.get('http://localhost:3000/songdetails')
	.then(function (response) {	songlistresult = response.data;	})
	.catch(function (error) { songlistresult = "Error while loading...";	});
		
		settitledata(titleresult)
		setaboutdata(aboutresult)
		setsongdata(songlistresult)
	 }

	 if(titledata.length === 0) { GetRequest() }
  return (
  <div>
  { (titledata.status) ? 
  	<Routercomponent titledata={titledata} aboutdata={aboutdata} songdata={songdata} /> :
  	 <Commoncomponent data={titledata.error} />}

  	 </div>
  );
}