import React from 'react'
import WithContainer from './WithContainer'

function NameContainer({ name, changeName }) {
    return (
        <div>
            <h1>{name}</h1>
            <input
                value={name}
                onChange={changeName}
            />
            {/* <button onClick={changeName}>Change Name</button> */}
        </div>
    )
}

export default WithContainer(NameContainer)
