import React,{useEffect , useState} from 'react'
import axios from 'axios'

import Spinner from './Spinner.jsx';


function Body() {
    const [isLoading , setIsLoading] = useState(true)
    const [page , setPage] = useState(1)
    const [posts,setPosts] = useState([])

    useEffect(doThis,[page])
  function doThis() {
    axios.get(`https://reqres.in/api/users?page=${page}`)
        .then(res => {
            console.log(res.data.data)
            setPosts(res.data.data)
            setIsLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
   }

  function addArray(post) {
    return (<div className='card' key={post.id}>
                <div className='card-image'>
                    <img src={post.avatar} alt="avatar" />
                </div>
                <div className='card-body'>
                    <div className='name'>{post.first_name} {post.last_name}</div>
                    <div className='email'>{post.email}</div>
                </div>
            </div>
    );
}
    return (
        <div>
            {isLoading ? (<Spinner />) : (page > 2 ? <div className='actual'>No User Data to display.</div> : <div className='cards'>{posts.map(addArray)}</div>)}
            <div className='buttons'>
                {page <= 1 ? null : <button onClick={() => setPage(page - 1)} className='previous'>Previous</button>}
                <button onClick={() => setPage(page + 1)} className='next'>Next</button>
            </div>
        </div>
    )
}

export default Body
