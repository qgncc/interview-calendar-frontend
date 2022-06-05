import "./WeekBar.scss"
import {MouseEvent} from "react";


interface WeekBarProps{
	curr_day: Date;
	//TODO classNAme
}

export function WeekBar({curr_day}: WeekBarProps){
	function isToday(date: Date) {
		let today = new Date();

		return (
			today.getFullYear() === date.getFullYear() &&
			today.getMonth() === date.getMonth() &&
			today.getDate() === date.getDate()
		);
	}

	let firstDayOfWeek = new Date(curr_day);
	firstDayOfWeek.setDate(curr_day.getDate()-curr_day.getDay());
	let days = [];
	for(let day = firstDayOfWeek, i=0; i<7; i++,day.setDate(day.getDate()+1)){
		let className = "week__day ";
		let picked = ""
		if(isToday(day)){
			picked+="week__dayNumber--picked"
		}
		const elem = (
			//TODO senematic
			<div key={day.getDate()} className={className}>
				<div className="week__dayName">
					{day.toLocaleDateString("en-US", { weekday: 'long' })[0]}
				</div>
				<div className={"week__dayNumber "+picked}>
					{day.getDate()}
				</div>
			</div>
		)
		days.push(elem)
	}
	return(
		<div className="week">
			{days}
		</div>
	)

}