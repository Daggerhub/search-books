import React, {useState} from 'react'
import { UserAuth } from "../../context/AuthContext"
import Books from "../../components/books"
import axios from "axios";
const SearchBooks = () => {

  const { logOut } = UserAuth();
  const [ text, setText ] = useState("");
  const [ bookData, setBookData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

    const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const book = event.target.value;
    setText(book);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
      setLoading(false);
      setBookData(data.data.items);
    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <div>
      <h1>Search Books</h1>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            onChange={handleChange}
            placeholder="Search for books"
          />
        <button type='submit' >Search</button>
        </form>      
        <div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "20px"
          }}
        >
          {loading ? 
            <h1>Loading......</h1>
            :
            bookData.map((data) => {
              return <Books key={data.id} data={data} />
            })
          }
        </div>
    </div>  
    )
}

export default SearchBooks