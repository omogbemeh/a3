import React from 'react'
import Posts from './Posts';
const Home = () => {
    return (
        <div className='container'>
           <h3>Welcome</h3>
           <div>
               <form action="" className="add-post">
                    <input type="text"/>
                    <button>Post</button>
               </form>
           </div>
           <div>
            <Posts />
           </div>
        </div>
    )
}

export default Home
