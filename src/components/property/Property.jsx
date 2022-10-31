import React from 'react'
import "./property.css"

const Property = () => {
  return (
    <div className='propertyList'>
      <div className="propertyListItem">
      <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="pListImg"
        />
        <div className="propertyListTitle">
            <h1>Hotels</h1>
            <h2>200 hotels</h2>
        </div>
      </div>

      <div className="propertyListItem">
      <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className="pListImg"
        />
        <div className="propertyListTitle">
            <h1>Aparments</h1>
            <h2>2332 hotels</h2>
        </div>
      </div>

      <div className="propertyListItem">
      <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="pListImg"
        />
        <div className="propertyListTitle">
            <h1>Resorts</h1>
            <h2>2500 hotels</h2>
        </div>
      </div>

      <div className="propertyListItem">
      <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg"
        />
        <div className="propertyListTitle">
            <h1>villas</h1>
            <h2>200 hotels</h2>
        </div>
      </div>

      <div className="propertyListItem">
      <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="propertyListTitle">
            <h1>Cavins</h1>
            <h2>3000 hotels</h2>
        </div>
      </div>


    </div>
  )
}

export default Property
