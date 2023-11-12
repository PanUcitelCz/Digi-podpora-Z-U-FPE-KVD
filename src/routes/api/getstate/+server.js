import { mysqlconnFn } from "$lib/db/mysql";
import { json } from "@sveltejs/kit";
export  async function POST({request}) {
  //let mysqlconn = await mysqlconnFn();
await request.json().then((data)=>{
  console.log(data.eve.username+" "+data.eve.pw+" "+data.eve.mail);
  return data.eve.username;
});
return true;
// mysqlconn.query("INSERT INTO user (Username, PW, Email) VALUES ("+request+", "+request+", "+request+")").finally(()=>console.log("yay"));
 
}

//TODO: víc post rozpoznávat tak id na začátek json aby se poznalo jakej post ve switchi