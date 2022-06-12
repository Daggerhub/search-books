import React, { useEffect, useState } from 'react'
import { useParams, } from "react-router-dom"
import axios from "axios";
const BookDetails = () => {
  const params = useParams();
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getData = async() => {
      setLoading(true);
      const bookData = await axios.get(`https://www.googleapis.com/books/v1/volumes/${params.id}?key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
      setLoading(false);
      setdata([bookData.data]);
    }
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [setLoading, params.id])
  
  return (
    <>
    {loading ? 
        <h1>Loading......</h1>
        :
        data && data.map((data) => {
        return (
         <div key={data.id}> 
            <h2>{data.volumeInfo.title}</h2>
            <img src={data.volumeInfo.imageLinks.thumbnail} alt="bookThumbnails"/>
            <h3>{data.volumeInfo.description}</h3>
          </div>
        )})
    } 
    </>   
  )
}

export default BookDetails