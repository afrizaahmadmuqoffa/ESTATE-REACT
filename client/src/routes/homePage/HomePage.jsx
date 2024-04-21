import React from 'react'
import "./homePage.scss"

const HomePage = () => {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem, corporis officiis dolorem minus vel modi ex culpa vero reiciendis qui repudiandae! Dolorem consequuntur enim velit neque nobis fuga natus?</p>
            </div>
        </div>
        <div className="imgContainer">
            <img src="bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage