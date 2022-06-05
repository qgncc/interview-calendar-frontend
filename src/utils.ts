export function getDayAndHourFromId(id: string){
	let day=parseInt(id[0]);
	let hour=parseInt(id[1]+id[2]);
	return [day,hour];
}
export async function send(type:"add"|"delete"|"get", host: string, date: string, hour?: string){
	let dateReg=/[0-9]{4}[0-1][0-9][0-3][1-9]/;
	let hourReg=/[0-1][0-9]|[2][0-3]/;
	if(!date.match(dateReg)) throw new Error("Wrong date signature");
	if( (type==="add" || type==="delete") && hour === undefined) throw new Error("Need to know hour to add/delete appointment to calendar");
	if((type==="add" || type==="delete") && !hour!.match(hourReg)) throw new Error("Wrong hour signature");
	
	let method = type==="add"?"POST":
				 type==="delete"?"DELETE":undefined;
	let appointment = {
				date: date,
				hour: hour
	}
	let opts: RequestInit = {
		method: method,
		// mode: 'cors',
		// Access_Control_Allow_Origin: "*",
		// cache: 'no-cache',
		// credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
			},
		// referrerPolicy: 'no-referrer', 
		body: JSON.stringify(appointment)
	}


	switch(type){
		case "add":
		case "delete":
			return fetch(host+"api/appointments/", opts);
		case "get":
			return fetch(host+"api/appointments/"+date);
	}
}