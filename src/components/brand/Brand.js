import React from 'react'
import { brandImages } from './imports'
import './brand.css'

function Brand() {
    return (
        <div className='gpt3__brand section__padding'>
            {brandImages.map(item => (
                <div key={item.id}>
                    <img
                        src={item.img}
                        alt={item.img.toString()}
                    />
                </div>
            ))}
        </div>
    )
}

export default Brand
