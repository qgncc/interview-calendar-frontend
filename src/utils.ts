interface AddOpts{
	date?: string,
	time?: string,
}
interface DeleteOpts{
	date?: string,
	time?: string	
}
interface GetOpts{
	firstDayOfWeek?:string,
}
export const dateReg=/(\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01]))/;
export const timeReg=/[0-1][0-9]|[2][0-3]/;
// const timeReg=/[0-1][0-9]|[2][0-3](:[0-5][0-9](:[0-5][0-9])?)?/;
export function hasAppointmentAt(dayStr:string, hourStr: string, appointments:number[]){
		let day = parseInt(dayStr), hour = parseInt(hourStr);
		let mask = 1<<hour;
		return !!(appointments[day]&mask);
}
export function getDayAndHourFromId(id: string):[string,string]{
	let day=id[0];
	let hour=id[1]+id[2];
	return [day,hour];
}
export function dateToString(date: Date){
	let str = "" +date.getFullYear()+
 			  "-"+("0"+(1+date.getMonth())).slice(-2)+
              "-"+("0"+date.getDate()).slice(-2);
	return str;
}
export async function send(
		type:"add"|"delete"|"get", 
		host: string, 
		reqData: AddOpts&DeleteOpts&GetOpts 
	){
	if(type==="get" && (
		reqData.firstDayOfWeek === undefined
		||!dateReg.test(reqData.firstDayOfWeek)
		)
	) throw new Error("Wrong date format. Date format: YYYY-MM-DD");

	if((type==="add" || type==="delete") && (
		reqData.date === undefined
			||reqData.time === undefined
			||!dateReg.test(reqData.date)
			||!timeReg.test(reqData.time)
			)
	) throw new Error("Wrong date and/or time format. Date format: YYYY-MM-DD, Time format: HH:mm:ss");
	
	const methods={
		add:"POST",
		delete:"DELETE",
		get:"GET"
	}

	


	switch(type){
		case "add":
		case "delete":
			let appointment = {
				date: reqData.date,
				time: reqData.time
			};
			let reqOptions: RequestInit = {
				method: methods[type],
				headers: {
					'Content-Type': 'application/json'
					},
				body: JSON.stringify(appointment)
			}
			return fetch(host+"api/appointments/", reqOptions);
		case "get":
			return fetch(host+"api/appointments/"+reqData.firstDayOfWeek);
	}

}