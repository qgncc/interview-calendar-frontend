import {Controls} from "../Controls/Controls";
import {WeekBar} from "../WeekBar/WeekBar";
import {MouseEvent} from "react";
import {SectionStyled} from "../styled";


interface WeekSwitcherProps{
  next:(event: MouseEvent<HTMLButtonElement>)=>void,
  prev:(event: MouseEvent<HTMLButtonElement>)=>void,
  firstDayOfWeek:Date,
  //TODO classNAme
}


export function WeekSwitcher({next,prev,firstDayOfWeek}:WeekSwitcherProps){
  return(
        <SectionStyled>
          <WeekBar firstDayOfWeek={firstDayOfWeek}/>
          <Controls next={next}
                    prev={prev}
                    curr={firstDayOfWeek.toLocaleDateString("en-US", {year:"numeric", month:"long"})}/>
        </SectionStyled>
  )
}