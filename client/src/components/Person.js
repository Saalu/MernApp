import React from 'react'

function Person( {person}) {
    return (
        <div>
            <h1>{person.id}. {person.name}</h1>
        </div>
    )
}

export default Person
