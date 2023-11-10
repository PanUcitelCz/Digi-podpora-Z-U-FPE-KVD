import { mysqlconnFn } from "$lib/db/mysql";
import { json } from "@sveltejs/kit";
export  async function POST({request}) {
  //let mysqlconn = await mysqlconnFn();
  //let st = await request.json();
await request.json().then((data)=>{
  console.log(data.eve.username+" "+data.eve.pw+" "+data.eve.mail);
})
  //let n = request.body;
  //console.log("server "+request+" asds "+{st}+" sddsdsdssdsdsdsdsdsdsdsdsdsdsd"+n);
 // mysqlconn.query("INSERT INTO user (Username, PW, Email) VALUES ("+request+", "+request+", "+request+")").finally(()=>console.log("yay"));
 return json("aaa");
}

