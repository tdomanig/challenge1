const content1 = [
    "timelinecontent1",
    "timelinecontent2",
    "timelinecontent3",
    "timelinecontent4",
    "timelinecontent5",
    "timelinecontent6",
  ];

async function test(){
const response= await fetch('http://localhost:3000/about')
const data= await response.json()
for(let i=0; i<content1.length; i++){
     document.getElementById(content1[i]).innerText=data[content1[i]]
 }
}


test()

