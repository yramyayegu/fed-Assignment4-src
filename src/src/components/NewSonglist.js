import React,{ useState } from 'react';
import {Link ,Redirect, useLocation } from 'react-router-dom'
function NewSonglist (props) {	
const [redirectData, setRedirectData] = useState(null);
  	const { state: { newsongdata } } = useLocation();
 	console.log(newsongdata)
 	var data1 = JSON.parse(newsongdata)
 	
	
	console.log(data1)


 let handleClick = (data) => {
 	setRedirectData(data)
 	
 }
if (redirectData) {
	console.log(redirectData)
    	return <Redirect push to={{pathname: '/Songdetails', state: { data: redirectData }}} />    
    }

let i = 1;
  return (
    <div>	
  
	<table>
      <tbody>
		<tr>
			<th>#</th>
			<th>Song</th>
		</tr>
		{
			data1.map((item)=>
			<tr key={i++}>
				<td>{i}</td>
				<td>

					<a href=""  className='song' onClick={()=>handleClick(item)} >{item.title}</a>
				</td>
			</tr>
			)
		}
		<tr>
			<td colSpan='2'><Link className="slist" to="/add_song" ><button>Add song</button></Link></td>
			
		</tr>
		</tbody>
	</table>
    </div>
  );
}
export default NewSonglist;