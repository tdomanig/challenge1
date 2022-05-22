const fs  = require('fs');
const pug= require('pug');

const compiledIndex=pug.renderFile('src/pug/index.pug')
const compiledAboutme=pug.renderFile('src/pug/Aboutme.pug')
const compiledPortfolio=pug.renderFile('src/pug/Portfolio.pug')
const compiledContact=pug.renderFile('src/pug/Contact.pug')
const compiledImpressum=pug.renderFile('src/pug/Impressum.pug')
const compiledDatenschutz=pug.renderFile('src/pug/Datenschutz.pug')

fs.writeFile('public/index.html', compiledIndex,()=>console.log('compiling Index succesful'))
fs.writeFile('public/about.html', compiledAboutme,()=>console.log('compiling About succesful'))
fs.writeFile('public/Portfolio.html', compiledPortfolio,()=>console.log('compiling Portfolio succesful'))
fs.writeFile('public/Contact.html', compiledContact,()=>console.log('compiling Contact succesful'))
fs.writeFile('public/Impressum.html', compiledImpressum,()=>console.log('compiling Impressum succesful'))
fs.writeFile('public/Datenschutz.html', compiledDatenschutz,()=>console.log('compiling Datenschutz succesful'))

