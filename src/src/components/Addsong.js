import React,{ useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Prompt , Redirect } from "react-router-dom";
 const Addsong = (props) => {
   const [redirectData, setRedirectData] = useState(null);
	 let flag = false;
   const formik = useFormik({
     initialValues: {
       movie: '',
       title: '',
       songlength: '',
       singer: '',
       language : '',
     },
     validationSchema: Yup.object({
       movie: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       title: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
		 
		  songlength: Yup.string()
         .max(5, '00:00')
         .required('Required'),
		 
		  singer: Yup.string()
         .max(50, 'Must be 20 characters or less')
         .required('Required'),       
     
      language: Yup.string()
         .max(50, 'Must be 20 characters or less')
         .required('Required'),       
     }),
     onSubmit: values => {

      
      values.id = props.data.length+1 
      let obj = values
      let allsongs = props.data;
      allsongs.push(obj)
      let formdata = JSON.stringify(allsongs, null, 2)
      
      console.log(formdata)
      

      setRedirectData(formdata)
     },
   });
   
     if (redirectData) {
      console.log(redirectData)

      return <Redirect push to={{pathname: '/NewSonglist', state: { newsongdata: redirectData }}} />
    }

   if(Object.keys(formik.errors).length)
   {
	   flag = true;
   }
   return (
   <div>
   <Prompt when={flag} message="Are you sure you want to leave?" />

     <form onSubmit={formik.handleSubmit}>
	 
	  <div className="container">
          <div className="form-group">
            <label htmlFor ="exampleInputEmail1">Movie </label>
            <input id="movie" name="movie" className="form-control"
				onChange={formik.handleChange} 
				onBlur={formik.handleBlur} 
				
			/>
	<p className="error">{formik.touched.movie && formik.errors.movie ? (<div>{formik.errors.movie}</div>) : null} </p>
          </div>
          <div className="form-group">
            <label htmlFor ="exampleInputPassword1">Title</label>
            <input id="title" name="title" className="form-control"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				
			/>
		  <p className="error">{formik.touched.title && formik.errors.title ? (<div>{formik.errors.title}</div>) : null} </p>
          </div>
          <div className="form-group">
            <label htmlFor ="exampleInputPassword1">Length</label>
               <input id="songlength" name="songlength" className="form-control"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					
				/>
          <p className="error">{formik.touched.songlength && formik.errors.songlength ? (<div>{formik.errors.songlength}</div>) : null} </p>
          </div>
          <div className="form-group">
            <label htmlFor ="exampleInputPassword1">Singer</label>
                 <input id="singer" name="singer" className="form-control"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					
				/>
          <p className="error">{formik.touched.singer && formik.errors.singer ? (<div>{formik.errors.singer}</div>) : null} </p>
          </div>


            <div className="form-group">
            <label htmlFor ="exampleInputPassword1">Language</label>
                 <input id="language" name="language" className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          
        />
          <p className="error">{formik.touched.language && formik.errors.language ? (<div>{formik.errors.language}</div>) : null} </p>
          </div>


          <div className="form-group">
      
            <button type="submit"  className="btn btn-primary">Submit</button>
          </div>
        </div>
     </form>
	 </div>
   )
          
 };
 
 
  export default Addsong;