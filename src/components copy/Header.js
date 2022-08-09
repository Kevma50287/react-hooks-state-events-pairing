import React from 'react'

function Header({ props: { title, views, createdAt}, votes, setVotes }) {
    function handleVote (e){
        const newObj = {...votes}
        console.log(newObj)
        if (e.target.className === 'upvoteBtn'){
            newObj.upvotes ++
        } else {newObj.downvotes ++}
        setVotes(newObj)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button className='upvoteBtn' onClick={handleVote}>
                {votes.upvotes}
                👍
            </button>
            <button className='downvoteBtn' onClick={handleVote}>
                {votes.downvotes}
                👎
            </button>
        </div>
    )
}

export default Header