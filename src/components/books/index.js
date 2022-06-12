import React from 'react'
import { Link } from "react-router-dom"

const Books = (props) => {
  return (
  <Link to={`/book/${props.data.id}`}>  
   <div
   style={{
     border: "5px",
     borderColor: "black",
     borderStyle:"solid",
     cursor: "pointer"
   }}> 
    <div
      style={{
        margin: "10px",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        maxWidth: "200px",
      }}
    >
      <h2
      style={{ 
        textOverflow: "clip"
      }}
      >{props.data.volumeInfo.title}
      </h2>
      <img 
      src={
         props.data.volumeInfo.imageLinks === undefined
        ? ""
        : `${props.data.volumeInfo.imageLinks.thumbnail}`
      }
      style={{
        objectFit: "contain"
      }}
      alt="img"/>
    </div>
    </div>
    </Link>
  )
}

export default Books