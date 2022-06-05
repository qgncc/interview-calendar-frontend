import {Controls} from "../Controls/Controls";
import {WeekBar} from "../WeekBar/WeekBar";
import {MouseEvent} from "react";
import "./WeekSwitcher.scss";


interface WeekSwitcherProps{
  next:(event: MouseEvent<HTMLButtonElement>)=>void,
  prev:(event: MouseEvent<HTMLButtonElement>)=>void,
  current:Date,
  //TODO classNAme
}


export function WeekSwitcher({next,prev,current}:WeekSwitcherProps){
  return(
        <section className="weekSwitcher">
          <WeekBar curr_day={current}/>
          <Controls next={next}
                    prev={prev}
                    curr={current.toLocaleDateString("en-US", {year:"numeric", month:"long"})}/>
        </section>
  )
}