import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem";

const HotelList = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setdestination] = useState(location.state.destination)
  const [dateRange, setdateRange] = useState(location.state.dateRange)
  const [options, setoptions] = useState(location.state.options)

  const [openDate, setopenDate] = useState(false); //toggle date picker
  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span className="headerSearchText" onClick={() => setopenDate(!openDate)}>{`${format(dateRange[0].startDate, "yyyy-MM-dd")} to ${format(
                  dateRange[0].startDate,
                  "yyyy-MM-dd"
                )}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setdateRange([item.selection])}
                    minDate={new Date()}
                    ranges={dateRange}
        
                  />
                )}
                
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
              </div>
              <button>Search</button>
          </div>
          <div className="listResults">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
