import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'
import { footerDataLink1, footerDataLink2, footerDataLink3 } from './footerData'

function Footer() {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img
                        src={gpt3Logo}
                        alt="gpt3_logo"
                    />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    {footerDataLink1.map(item => <p key={item.id}>{item.link}</p>)}
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    {footerDataLink2.map(item => <p key={item.id}>{item.link}</p>)}
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    {footerDataLink3.map(item => <p key={item.id}>{item.link}</p>)}
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>@2021 GPT-3. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer
