import React, { useState } from 'react'
import Comments from './Comments'

function CommentSection({ comments }) {
    const [isHidden, setIsHidden] = useState(false)

    function hideAll() {
        setIsHidden(isHidden => !isHidden)
        console.log(isHidden)
    }

    return (
        <div>
            <button onClick={hideAll}>Hide Comments</button>
            <div className='border'></div>
            <div style={{ display: isHidden ? "none" : "block" }}>
                <Comments comments={comments} />
            </div>
        </div>
    )
}

export default CommentSection