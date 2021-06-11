import {useLocation } from 'react-router-dom'

function Songdetails(props)
{
	 const { state: { data } } = useLocation();
	console.log('Songdetails')
	console.log(data)
	
	var songdata = data
	
    
    return(
	<div className="container">
		
		<table>
		<tbody>
		  <tr>
			<th>Song</th>
			<th>Details</th>
		  </tr>
		  <tr>
			<td>Title</td>
			<td>{songdata.title}</td>
		  </tr>
		  <tr>
			<td>Language</td>
			<td>{songdata.language}</td>
		  </tr>
		  <tr>
			<td>Movie</td>
			<td>{songdata.movie}</td>
		  </tr>
		  <tr>
			<td>Singer</td>
			<td>{songdata.singer}</td>
		  </tr>
		  <tr>
			<td>Song Length</td>
			<td>{songdata.songlength}</td>
		  </tr>
		
		  </tbody>
		</table>
	</div>

    )
}

export default Songdetails;