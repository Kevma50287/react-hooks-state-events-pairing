import React, { useState } from 'react'

export default function UpDown({ upvotes = 0, downvotes = 0 }) {
    const [votes, setVotes] = useState(
        {
            upvotes: upvotes,
            downvotes:downvotes
        }
    )

    function handleVote(e) {
        const newObj = { ...votes }
        console.log(newObj)
        if (e.target.className === 'upvoteBtn') {
            newObj.upvotes++
        } else { newObj.downvotes++ }
        setVotes(newObj)
    }

    return (
        <>
            <button className='upvoteBtn' onClick={handleVote}>
                {votes.upvotes}
                👍
            </button>
            <button className='downvoteBtn' onClick={handleVote}>
                {votes.downvotes}
                👎
            </button>
        </>
    )
}
