import React from 'react'
import UpDown from './UpDown'

function Header({props: {title, views, createdAt, upvotes, downvotes}}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <UpDown upvotes={upvotes} downvotes={downvotes} />
        </div>
    )
}

export default Header