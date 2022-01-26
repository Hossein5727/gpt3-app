import React from 'react'
import { Article } from '../../components'
import blog01 from '../../assets/blog01.png'
import './blog.css'
import { blogImages } from './imports'

function Blog() {
    return (
        <div className="gpt3__blog section__padding" id="blog">

            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
            </div>

            <div className="gpt3__blog-container">

                <div className="gpt3__blog-container_groupA">
                    <Article
                        imgUrl={blog01}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>

                <div className="gpt3__blog-container_groupB">
                    {blogImages.map(item => (
                        <Article
                            key={item.id}
                            date={item.date}
                            imgUrl={item.img}
                            text={item.text}
                        />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Blog
