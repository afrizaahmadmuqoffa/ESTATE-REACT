import React from 'react'
import "./homePage.scss"
import SearchBar from '../../components/searchBar/SearchBar' 

const HomePage = () => {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem, corporis officiis dolorem minus vel modi ex culpa vero reiciendis qui repudiandae! Dolorem consequuntur enim velit neque nobis fuga natus?</p>
            <SearchBar/>
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property ready</h2>
              </div>
            </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage