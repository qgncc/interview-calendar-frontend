import React from 'react';
import logo from './logo.svg';
import {Header} from "./components/Header/Header";
import {TimeTable} from "./components/TimeTable/TimeTable";
import {WeekSwitcher} from "./components/WeekSwitcher/WeekSwitcher";
import {Footer} from "./components/Footer/Footer";
import {Popup} from "./components/Popup/Popup";

import {getDayAndHourFromId, send} from "./utils";
import {useState, useEffect} from "react";


let host= "http://localhost:8081/"

function App() {
  let [current, setCurrent] = useState(new Date());
  let [appointments, setAppointments] = useState([0,0,0,0,0,0,0]);
  let [pickedHour, setPicked] = useState("");
  let [isPopupOpen, setIsPopupOpen] = useState(false);

  async function fetchAppointments(date:string){
    return send("get", host, date);
    // return Promise.resolve([1+current.getDate(),2,3,4,5,6,7]);
  }
  //TODO custom hooks
  useEffect(()=>{
    let date = ""+current.getFullYear()
               +("0"+current.getMonth()).slice(-2)
               +("0"+current.getDate()).slice(-2);
    fetchAppointments(date).then((data)=>{
      console.log(data);
    }
  );
  },[current]);

  function next(){
    let newDate = new Date(current);
    newDate.setDate(current.getDate()+7);
    setCurrent(newDate);
    console.log(newDate);
  }
  function prev(){
    let newDate = new Date(current);
    newDate.setDate(current.getDate()-7);
    setCurrent(newDate);
    console.log(newDate);
  }
  function removeAppointment(){
    let[day, hour] = getDayAndHourFromId(pickedHour);
    let date = ""+current.getFullYear()
               +("0"+current.getMonth()).slice(-2)
               +("0"+current.getDate()).slice(-2);
    let mask = 1<<hour;
    if(appointments[day]&mask){
      appointments[day]^=mask;
      
    }
    send("delete", host, date, ("0"+hour).slice(-2));
    setPicked("");
  }
  function openPopup(){
    document.body.style.height="100vh"
    document.body.style.overflow="hidden";
    setIsPopupOpen(true);
  }
  function closePopup(){
    document.body.style.height="";
    document.body.style.overflow="";
    setIsPopupOpen(false);
  }
  function addAppointment(date: string, hour: string){
    send("add", host, date.replace("-",""), hour);
  }
  function backToToday(){
    let date = new Date();
    setCurrent(date);
  }

  return (
      <div className="main">
        {isPopupOpen && <Popup close={closePopup}
                               add={addAppointment}/>}
        <div className="stickedPanel">
          <Header openPopup={openPopup}/>
          <WeekSwitcher next={next}
                        prev={prev}
                        current={current}
          />
        </div>
        <TimeTable className="main__calendar" 
                   appointments={appointments}
                   picked={pickedHour}
                   setPicked={setPicked}
                   />
        <Footer picked={pickedHour}
                remove={removeAppointment}
                today={backToToday}
        />
      </div>
  );
}

export default App;
