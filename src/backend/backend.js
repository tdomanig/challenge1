const fastify = require('fastify');
const fastifyCors= require('fastify-cors');

const server=fastify({logger: true})

server.register(fastifyCors)

async function start(){
    await server.listen(3000)
}

server.get('/about', async()=>{
 const cv={
     timelinecontent1:"Hauptschule Seeboden",
     timelinecontent2:"Polytechnische Schule Spittal",
     timelinecontent3:"Lehre als Mechatroniker",
     timelinecontent4:"Bundesheer",
     timelinecontent5:"Berufsreifeprüfung",
     timelinecontent6:"Coding School"
     
 }
 return cv
})



server.get('/portfoliotitle', async()=>{
    const projectTitles={
        projectTitle1:"Landingpage",
        projectTitle2:"Blogwebsite",
        projectTitle3:"Backendentwicklung",
        projectTitle4:"Covid-Infektionsdaten",
        projectTitle5:"Grafische-Datenanalyse",
        projectTitle6:"Website für unlizensierte Bilder",
        projectTitle7:"Wetter webapp mit ZAMG API",
        projectTitle8:"Webshop",
        projectTitle9:"Planungsystem für Mitarbeiter",
        projectTitle10:"Kryptopreise mit Market Cap",
    }

    return projectTitles
})

server.get('/portfolioImage', async()=>{
    const imagePaths={
        projectImage1:"./images/projects/landingpage.jpg",
        projectImage2:"./images/projects/blog.jpg",
        projectImage3:"./images/projects/Backend.jpg",
        projectImage4:"./images/projects/Covid.jpg",
        projectImage5:"./images/projects/datatanalyse.jpg",
        projectImage6:"./images/projects/sharepics.jpg",
        projectImage7:"./images/projects/weatherapp.jpg",
        projectImage8:"./images/projects/webshop.jpg",
        projectImage9:"./images/projects/worksystem.jpg",
        projectImage10:"./images/projects/krypto.jpg",
    }
    return imagePaths
})

server.get('/portfolioContent', async()=>{
    const imagePaths={
        projectContent1:"Eine Website mit Persönlichen Informationen sowie Lebenslauf und Projekte für einen Webdesigner",
        projectContent2:"Eine Website für Blogartikel einer Influencerin",
        projectContent3:"Backendentwicklung in Node js zur verbindung einer Datenbank",
        projectContent4:"Website für aktuell Covid-Infektionszahlen",
        projectContent5:"Grafische Datenanlyse für Datensätze ",
        projectContent6:"Ein Projekt für unlizensierte Bilder welche jeder Verwenden kann ",
        projectContent7:"Eine Webapp welche Aktuell Wetterdaten anhand der ZAMG-API anzeigt",
        projectContent8:"Der Webshop für Produkte, welche in jeder Notlage nützlich sind",
        projectContent9:"Ein System um jeden Mitarbeiter über seine Zeiteinteilung Arbeitszeit oder Projektzuteilungen zu informieren",
        projectContent10:"Eine Webapp welche, mittels der Coingecko-API die Aktuellen Preise aller Kryptowährungen bereitstellt. "
    }
    return imagePaths
})

server.get('/portfolioDate', async()=>{
    const imagePaths={
        projectDate1:"22.04.2022",
        projectDate2:"15.03.2022",
        projectDate3:"10.01.2022",
        projectDate4:"10.12.2021",
        projectDate5:"06.11.2021",
        projectDate6:"11.06.2021",
        projectDate7:"27.03.2021",
        projectDate8:"18.12.2020",
        projectDate9:"13.11.2020",
        projectDate10:"21.09.2020"
    }
    return imagePaths
})




start()