import React, { useState } from 'react'
import UpDown from './UpDown'
import Form from './Form'

function Comments({ comments }) {
    const [search, setSearch] = useState("")
    const [alphaSort, setAlphaSort] = useState(false)

    console.log(alphaSort)
    const commentLength = comments.length
    // const commentList = comments
    //     .filter((e) => {
    //         if (search === "") {
    //             return true
    //         } else {
    //             return e.user.toLowerCase().includes(search.toLowerCase())
    //         }
    //     })
    //     .map((item, i) => {
    //         return (
    //             <li key={item.comment + i}>
    //                 <h3>{item.user}</h3>
    //                 <p>{item.comment}</p>
    //                 <UpDown />
    //                 <button onClick={(e) => e.target.parentNode.remove()}>Remove Comment</button>
    //             </li>
    //         )
    //     });

    const filteredList = comments
        .filter((e) => {
            if (search === "") {
                return true
            } else {
                return e.user.toLowerCase().includes(search.toLowerCase())
            }
        });

    if (alphaSort){
        //The localeCompare() method returns a number indicating whether a reference string comes before, 
        //or after, or is the same as the given string in sort order.
        filteredList.sort((a, b)=>{
            return a.user.toLowerCase().localeCompare(b.user.toLowerCase())
        })
    }
        
    const commentList = filteredList
        .map((item, i) => {
            return (
                <li key={item.comment + i}>
                    <h3>{item.user}</h3>
                    <p>{item.comment}</p>
                    <UpDown />
                    <button onClick={(e) => e.target.parentNode.remove()}>Remove Comment</button>
                </li>
            )
        });

    return (
        <div>
            <Form setSearch={setSearch} setAlphaSort={setAlphaSort} alphaSort={alphaSort} />
            <h1>{commentLength} Comments</h1>
            <ul>
                {commentList}
            </ul>

        </div>
    )
}

export default Comments
