import { useState } from "react"
import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"


const List = () => {
const location = useLocation();

const [open,setOpen]=useState(false)

const [destinations,setDestinations] = useState(location.state.destinations);
const [date, setDate] = useState(location.state.date);
const [options,setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
              <div className="listSearchItem">
                <label >Destination/property name:</label>
                <input type="text" placeholder={destinations}/>
              </div>

              <div className="listSearchItem">
                <label >Check-in date</label>
                <span onClick={()=>setOpen(!open)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )}`}</span>

              {open && <DateRange onChange={item=>setDate((item.selection))} minDate={new Date()} ranges={date}/>}
              </div>

              <div className="listSearchItem">
                <label >Check-out date</label><span onClick={() => setOpen(!open)}>{`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {open && <DateRange onChange={item=>setDate((item.selection))} minDate={new Date()} ranges={date}/>}
              </div>
              <div className="isItem">
                <label >Options</label>
                <div className="isOptionItem">
                  <span className="isOptionText">Min Price <small>per night</small></span>
                  <input type="text" className="isoptionsInput" />
                </div>


                <div className="isOptionItem">
                  <span className="isOptionText">Max Price <small>per night</small></span>
                  <input type="text" className="isoptionsInput" />
                </div>

                <div className="isOptionItem">
                  <span className="isOptionText">Adults</span>
                  <input type="text" className="isoptionsInput" min={1} placeholder={options.adults} />
                </div>

                <div className="isOptionItem">
                  <span className="isOptionText">Childreen</span>
                  <input type="text" className="isoptionsInput" min={0} placeholder={options.childreen} />
                </div>

                <div className="isOptionItem">
                  <span className="isOptionText">Room</span>
                  <input type="text" className="isoptionsInput" min={1} placeholder={options.room}  />
                </div>
              </div>
              
              <button>Search</button>
          </div>

          <div className="listResults">
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
