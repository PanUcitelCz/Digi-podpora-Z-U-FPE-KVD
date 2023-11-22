import { mysqlconnFn } from "$lib/db/mysql";
//import bcrypt from 'bcrypt';
//let saltRounds = 10;

export  async function POST({request}) {
  
  let responce = new Response(JSON.stringify({"succ":false}), {
    headers: { 'Content-Type': 'application/json' },
  });
  
await request.json().then((data)=>{
  switch(data.eve.postID){
    case "1":{      
      let res = registerUser(data);
      return res;
    }
    case "2":{
      let res = login(data);
      return res;
      }
  }
});
 return responce;
}

async function registerUser(data){
  try{
      let mysqlconn = await mysqlconnFn();
      mysqlconn.query("INSERT INTO user (Username, PW, Email) VALUES ('"+data.eve.username+"', '"+data.eve.pw+"', '"+data.eve.mail+"')");
      return new Response(JSON.stringify({"succ":true}), {
        headers: { 'Content-Type': 'application/json' },
      });
  }
  catch(error){
    return new Response(JSON.stringify({"succ":false}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function login(data){
  try{
    let mysqlconn = await mysqlconnFn();
    let pw = await mysqlconn.query('SELECT PW FROM `user` WHERE Username = "'+data.eve.username+'"');      
    console.log(pw);
    return new Response(JSON.stringify({"succ":true}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  catch(err){
    return new Response(JSON.stringify({"succ":false}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
}

//TODO: víc post rozpoznávat tak id na začátek json aby se poznalo jakej post ve switchi