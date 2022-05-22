const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function getdata() {
  const responseDate = await fetch("http://localhost:3000/portfolioDate");
  const dataDate = await responseDate.json();
  const responseTitle = await fetch("http://localhost:3000/portfoliotitle");
  const dataTitle = await responseTitle.json();
  const responseContent = await fetch("http://localhost:3000/portfolioContent");
  const dataContent = await responseContent.json();
  const responseImage = await fetch("http://localhost:3000/portfolioImage");
  const dataImage = await responseImage.json();
  

    for(let i=1;i<=array1.length;i++) {
       
        document.getElementById("image" + i.toString()).style.backgroundImage="url("+dataImage["projectImage"+i.toString()]+")"
        document.getElementById("date" + i).innerText =dataDate["projectDate" + i];
        document.getElementById("title" + i).innerText =dataTitle["projectTitle" + i];
        document.getElementById("content" + i).innerText =dataContent["projectContent" + i];
    

}


}getdata()

  
  
