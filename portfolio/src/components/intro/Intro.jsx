import React from 'react'
import "./intro.css"

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">left
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hi my name is</h2>
                    <h1 className='i-name'>Eriq</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Technology Enthusiast</div>

                        </div>
                    </div>
                    <div className="i-description">
                        I like to program
                    </div>
                </div>
            </div>
            <div className="i-right">right
                <div className="i-right-wrapper"></div>
            </div>
        </div>
    )
}

export default Intro;