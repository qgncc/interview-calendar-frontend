import React from 'react';
import {Header} from "./components/Header/Header";
import {TimeTable} from "./components/TimeTable/TimeTable";
import {WeekSwitcher} from "./components/WeekSwitcher/WeekSwitcher";
import {Footer} from "./components/Footer/Footer";
import {Popup} from "./components/Popup/Popup";
import {StickedTopPanelStyled, MainStyled} from "./components/styled";

import {getDayAndHourFromId, hasAppointmentAt,send, dateToString} from "./utils";
import {useState, useEffect} from "react";


const host= process.env.NODE_ENV==="development"?"http://localhost:8081/":"https://test-calendar-for-uchiru.herokuapp.com/";

function App() {
  let date = new Date();
  date.setDate(date.getDate()-date.getDay());
  let [firstDayOfWeek, setFirstDayOfWeek] = useState(date);
  let [appointments, setAppointments] = useState([0,0,0,0,0,0,0]);
  let [picked, setPicked] = useState("");
  let [isPopupOpen, setIsPopupOpen] = useState(false);

  async function fetchAppointments(date: string){
    console.log("Fetching...", date);
    send("get", host, {firstDayOfWeek:date})
      .then((response)=> response.json()
        .then((data)=>{
          console.log(data);
          setAppointments(data.appointments);
        }
        )
      );
  
  }
  //TODO custom hooks
  useEffect(()=>{
    let date = dateToString(firstDayOfWeek);
    fetchAppointments(date);
  },[firstDayOfWeek]);

  function next(){
    let newDate = new Date(firstDayOfWeek);
    newDate.setDate(firstDayOfWeek.getDate()+7);
    setFirstDayOfWeek(newDate);
    console.log(newDate);
  }
  function prev(){
    let newDate = new Date(firstDayOfWeek);
    newDate.setDate(firstDayOfWeek.getDate()-7);
    setFirstDayOfWeek(newDate);
    console.log(newDate);
  }
  function addAppointment(date: string, time: string){
    send("add", host, {date,time}).then(()=>fetchAppointments(dateToString(firstDayOfWeek)));
  }
  function removeAppointment(){
    let[dayStr, hourStr] = getDayAndHourFromId(picked);
    let day = parseInt(dayStr);
    let hour = parseInt(hourStr)
    let dateObj = new Date(firstDayOfWeek);
    dateObj.setDate(dateObj.getDate()+ day);
    let date = dateToString(dateObj);
    let mask = 1<<hour;
    if(appointments[day]&mask){
      appointments[day]^=mask;
      
    }
    setPicked("");
    send("delete", host, {date, time:hourStr}).then(()=>fetchAppointments(dateToString(firstDayOfWeek)));
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

  function backToToday(){
    let date = new Date();
    date.setDate(date.getDate()-date.getDay());
    setFirstDayOfWeek(date);
  }

  return (
      <MainStyled className="main">
        {isPopupOpen && <Popup close={closePopup}
                               add={addAppointment}/>}
        <StickedTopPanelStyled>
          <Header openPopup={openPopup}/>
          <WeekSwitcher next={next}
                        prev={prev}
                        firstDayOfWeek={firstDayOfWeek}
          />
        </StickedTopPanelStyled>
        <TimeTable appointments={appointments}
                   picked={picked}
                   setPicked={setPicked}
                   />
        <Footer picked={!!picked && hasAppointmentAt(...getDayAndHourFromId(picked), appointments)}
                remove={removeAppointment}
                today={backToToday}
        />
      </MainStyled>
  );
}

export default App;
