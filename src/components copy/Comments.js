import React from 'react'

function Comments({comments}) {
    const commentLength = comments.length
    const commentList = comments.map((item, i)=>{
        return (
            <li key={item.comment+i}>
                <h3>{item.user}</h3>
                <p>{item.comment}</p>
            </li>
        )
    })
    return (
        <div>
            <h1>{commentLength} Comments</h1>
            <ul>
                {commentList}
            </ul>
        </div>
    )
}

export default Comments
