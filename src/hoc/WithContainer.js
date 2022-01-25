import React, { useState } from 'react';

function WithContainer(WrappedComponent, name) {
    const ShowName = (props) => {

        const [name, setName] = useState('reza')

        const changeName = (e) => {
            setName(e.target.value)
        }

        return (
            <WrappedComponent
                name={name}
                changeName={changeName}
                {...props}
            />
        )
    }
    return ShowName
}

export default WithContainer;
