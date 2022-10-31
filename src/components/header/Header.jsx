
import {
  faBed,
  faCalendarDays,
  faCar,
  faHotel,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Header = ({type}) => { // type is props

  const [open,setOpen]=useState(false)

  const [destinations,setDestinations]=useState("")

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  
const [openOptions,setOpenOptions] = useState(false)

const [options,setOptions]=useState({
  adults:1,
  childreen:0,
  room:1
})

const navigate = useNavigate()
const handleOption = (name,operation) =>{
  setOptions((prev) =>{
    return{
      ...prev,
      [name]: operation==="i" ? options[name] + 1 : options[name] - 1,
    }
  })
}


const handleSearch = ()=>{
  navigate("/hotels",{state: {destinations,date,options}})// set all of using nagigare hooks 
}

  return (
    <div className="header">
        <div className={type==="list" ? "headerContainers listMode" : "headerContainers"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>


            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Flights + Hotel</span>
            </div>


            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airpots taxis</span>
            </div>
        </div>

        { type !=="list" &&
          <><h1 className="headerTitle">Find your next stay</h1>
        <p className="headerdescription">Search deals on hotels, homes, and much more...</p>
        <button className="headerBtn">Explore Now</button>

        <div className="headereSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headreicon"/>
            <input type="text" placeholder='Where are you going ?' className='header-searchinput'
            onChange={(e) => setDestinations(e.target.value)}
            />
          </div>


          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headreicon"/>
            <span className='headers-search-text' onClick={()=>setOpen(!open)}>{`${format(date[0].startDate, "MM/dd/yyyy")}  to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {open && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
              classNames="date"
            />}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headreicon"/>
            <span className='headers-search-text' onClick={()=>setOpenOptions(!openOptions)}>{`${options.adults} Adults ${options.childreen} Childreen ${options.room} Room`}</span>
            {openOptions && <div className="options">
              <div className="optionsItem">
                <span className="spanText">Adults</span>
                <div className="optionCount">
                  <button className="optioncounterBtn" onClick={()=>handleOption("adults","d")} disabled={options.adults <=1}>-</button>
                  <span className="optionCountNumber">{options.adults}</span>
                  <button className="optioncounterBtn" onClick={()=>handleOption("adults","i")} >+</button>
                </div>
              </div>

              <div className="optionsItem">
                <span className="spanText">Childreen</span>
                <div className="optionCount">
                  <button className="optioncounterBtn" onClick={()=>handleOption("childreen","d")} disabled={options.childreen <=0}>-</button>
                  <span className="optionCountNumber">{options.childreen}</span>
                  <button className="optioncounterBtn" onClick={()=>handleOption("childreen","i")}>+</button>
                </div>
              </div>

              <div className="optionsItem">
                <span className="spanText">Room</span>
                <div className="optionCount">
                  <button className="optioncounterBtn" onClick={()=>handleOption("room","d")} disabled={options.room <=1}>-</button>
                  <span className="optionCountNumber">{options.room}</span>
                  <button className="optioncounterBtn" onClick={()=>handleOption("room","i")}>+</button>
                </div>
              </div>
            </div>}
          </div>

          <div className="headerSearchItem">
            <button className='headerBtn' onClick={handleSearch}>Search</button>
          </div>
        </div></>}
        </div>
    </div>
  )
}

export default Header


