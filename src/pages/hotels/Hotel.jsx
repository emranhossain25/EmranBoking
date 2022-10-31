import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
   faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import "./hotel.css"

const Hotel = () => {
  const [slidenumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpne = (i)=>{
    setSlideNumber(i);
    setOpen(true)

  }

  const handleMove = (direction)=>{
    let newSilideIndex;

    if(direction==="l"){
      newSilideIndex = slidenumber ===0 ? 5 :slidenumber-1
    }
    else{
      newSilideIndex = slidenumber ===5 ? 0 :slidenumber+1
    }

    setSlideNumber(newSilideIndex)
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft}className="arrow"  onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slidenumber].src} alt="" className="sliderImage" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve orBook Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New york</span>
          </div>
          <span className="hoteDistance">Excellent location -500m from center</span>
          <span className="hotePriceHighLight">Book a saty over $23 at this property and get and get free airport taxis</span>
          <div className="hotelImage">
            {photos.map((photo,i)=>(
              <div className="hotelImageWrapper">
                <img src={photo.src} alt="" className="hotelIng" onClick={()=>handleOpne(i)}/>
              </div>
            ))}
          </div>

          <div className="hotelDeatils">
            <div className="hotelDeatilsText">
              <h1 className="hoteltitle">Stay in the heart of kolkata</h1>
              <p className="hotelDEs">
              Located a 5-minute walk from NewTown's Gate in kolkata, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDeatailsPrice">
              <h1>Perfect for 9-night stay</h1>
              <span>
              Located in the real heart of Kolkata, this property has an
                excellent location score of 9.8!
              </span>

              <h2><b>$945</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>

        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
