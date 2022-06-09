import {WeekStyled, WeekDayStyled, WeekDayNumberStyled} from "../styled";



interface WeekBarProps{
	firstDayOfWeek: Date;
}

export function WeekBar({firstDayOfWeek}: WeekBarProps){
	function isToday(date: Date) {
		let today = new Date();

		return (
			today.getFullYear() === date.getFullYear() &&
			today.getMonth() === date.getMonth() &&
			today.getDate() === date.getDate()
		);
	}

	let days = [];
	for(let day = new Date(firstDayOfWeek), i=0; i<7; i++,day.setDate(day.getDate()+1)){
		let className = "week__day ";
		let picked = ""
		if(isToday(day)){
			picked+="picked"
		}
		const elem = (
			//TODO senematic
			<WeekDayStyled key={day.getDate()}>
				<div>
					{day.toLocaleDateString("en-US", { weekday: 'long' })[0]}
				</div>
				<WeekDayNumberStyled className={picked}>
					{day.getDate()}
				</WeekDayNumberStyled>
			</WeekDayStyled>
		)
		days.push(elem)
	}
	return(
		<WeekStyled>
			{days}
		</WeekStyled>
	)

}