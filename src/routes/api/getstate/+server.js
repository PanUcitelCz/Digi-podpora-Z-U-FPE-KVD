import { mysqlconnFn } from "$lib/db/mysql";

//import { json } from "@sveltejs/kit";
export  async function POST({request}) {
  let mysqlconn = await mysqlconnFn();
await request.json().then((data)=>{
  console.log(data.eve.username+" "+data.eve.pw+" "+data.eve.mail);
  mysqlconn.query("INSERT INTO user (Username, PW, Email) VALUES ('"+data.eve.username+"', '"+data.eve.pw+"', '"+data.eve.mail+"')");
});
const responce = new Response(JSON.stringify(true), {
  headers: { 'Content-Type': 'application/json' },
});

 return responce;
}

//TODO: víc post rozpoznávat tak id na začátek json aby se poznalo jakej post ve switchi