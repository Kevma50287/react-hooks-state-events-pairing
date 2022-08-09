import React from 'react'

function Form({setSearch, setAlphaSort, alphaSort}) {
    function handleAlphaSort (){
        setAlphaSort(()=> !alphaSort)
    }

    return (
        <div>
            <input type='text' name="search" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleAlphaSort}>{alphaSort ? 'Sort Default' : 'Sort Alphabetically' }</button>
        </div>
    )
}

export default Form
