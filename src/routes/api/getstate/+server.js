import { mysqlconnFn } from "$lib/db/mysql";

//import { json } from "@sveltejs/kit";
export  async function POST({request}) {
  let mysqlconn = await mysqlconnFn();
  let responce = new Response(JSON.stringify(true), {
    headers: { 'Content-Type': 'application/json' },
  });
await request.json().then((data)=>{
  
  switch(data.eve.postID){
    case "1":
      try{
        mysqlconn.query("INSERT INTO user (Username, PW, Email) VALUES ('"+data.eve.username+"', '"+data.eve.pw+"', '"+data.eve.mail+"')");
      }
      catch(error){
        responce = new Response(JSON.stringify(false), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
      break;
    case "2":
      //TODO login
      break;
  }
});
console.log("fin");
 return responce;
}

//TODO: víc post rozpoznávat tak id na začátek json aby se poznalo jakej post ve switchi