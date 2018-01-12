const http = require('http')//va chercher un élément http
const fs = require('fs')
const values = []
const sitesToHack = ['http://www.pass.be', 'http://www.triptyk.eu', 'http://www.mons.be']
let sitesLoaded =0 //de base il y a 0 site loader
const getPageFromSiteAndStock = (url)=>{//stock les url dans le body
    http.get(url,res=>{
        let body = ''
        res.on('data',data=>{
            body +=data
        })
        res.on('end',()=>{
            console.log(`end of loading ${url}`)
            values.push(body)
            checkFinishedProcess()//check si c'est fini
        })
    })
}
const checkFinishedProcess =() =>{
    sitesLoaded++
    if(sitesLoaded === sitesToHack.length){//si les site loader sont = au nombre de site dans la variable sitsToHack
        console.log('all page are saved in the file')//alors ecrit ça
        const tmpStr = values.reduce((prev,current)=>{//prend les valeurs précedente(prev) et suivante(current)
            return `${prev}\n${current}`
        })
        fs.writeFile('results.html',tmpStr,(err)=>{//il crée un ficher results.html
            if (err) console.log(err)
            console.log('all sites are saved')
        })
    }
}
const init = ()=>{
    sitesToHack.map(item => getPageFromSiteAndStock(item))
}
init()
// getPageFromSiteAndStock('http://www.pass.be')
// getPageFromSiteAndStock('http://www.triptyk.eu')
// getPageFromSiteAndStock('http://www.mons.be')