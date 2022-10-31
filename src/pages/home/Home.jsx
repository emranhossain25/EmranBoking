import React from 'react'
import Connect from '../../components/connectTrverls/Connect'
import ExploreIndia from '../../components/exploreIndia/ExploreIndia'
import Featured from '../../components/featured/Featured'
import Featuredproperty from '../../components/featuredProperty/Featuredproperty'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import Property from '../../components/property/Property'
import QuickTrip from '../../components/quickTrip/QuickTrip'
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitl">Quick and easy trip planner</h1>
          <QuickTrip/>
          <h1 className="homeTitl">Explore India</h1>
          <ExploreIndia/>
          <h1 className="homeTitl">Browse by Property type</h1>
          <Property/>
          <h1 className="homeTitl">Homes guest love</h1>
          <Featuredproperty/>
          <h1 className="homeTitl">Connect with other travelers</h1>
          <Connect/>
          <MailList/>
          <Footer/>
        </div>  
    </div>
  )
}

export default Home
