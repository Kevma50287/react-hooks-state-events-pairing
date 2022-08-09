import React, { useState } from 'react'
import Comments from './Comments'

function CommentSection({ comments }) {
    const [isHidden, setIsHidden] = useState(false)

    function hideAll(){
        setIsHidden(!isHidden)
    }

    return (
        <div>
            <button onClick={hideAll}>Hide Comments</button>
            <div className='border'></div>
            {isHidden ? null : <Comments comments={comments}/> }
        </div>
    )
}

export default CommentSection