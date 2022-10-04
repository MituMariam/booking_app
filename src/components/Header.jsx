import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCalendarDays,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
const Header = ({ type }) => {

  const [destination, setdestination] = useState("");
  const [openDate, setopenDate] = useState(false); //toggle date picker
  //date range setup
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);//toggle options
  //setup booking options
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  //handle up down button booking options
  const handleOptions = (items, actions) => {
    setOptions((prev) => {
      return {
        ...prev,
        [items]: actions === "i" ? options[items] + 1 : options[items] - 1,
      };
    });
    console.log("click");
  };

  const navigate = useNavigate();
  const handleSearch = () => {
      navigate('/hotels', { state: { destination, dateRange, options } });
  };

  return (
    <div className={type === "list" ? "header listMode" : "header"}>
      {/* <div className="header"> */}
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setdestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span
                  onClick={() => setopenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dateRange[0].startDate, "yyyy-MM-dd")} to ${format(
                  dateRange[0].startDate,
                  "yyyy-MM-dd"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={dateRange}
                    className={"date_range" + (openDate && " active")}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                </span>

                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCountBtn"
                          onClick={() => handleOptions("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">{options.adult}</span>
                        <button
                          className="optionCountBtn"
                          onClick={() => handleOptions("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCountBtn"
                          onClick={() => handleOptions("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">
                          {options.children}
                        </span>
                        <button
                          className="optionCountBtn"
                          onClick={() => handleOptions("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCountBtn"
                          onClick={() => handleOptions("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">{options.room}</span>
                        <button
                          className="optionCountBtn"
                          onClick={() => handleOptions("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="searchBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
