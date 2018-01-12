// // creer un serveur web

// const http = require('http')

// http.createServer((req,res)=>{//requete response(resultat)
//     console.log('we have receveid a request!!!')
//     res.end('hello world')// la reponse s'arrête -- termine la requête
// }).listen(8000,()=>{//port http de base: 80
//     console.log('server running and listening port 8000')
// })

//-----------------------------------------------------------------------
// const http = require('http')
// const fs = require('fs')
// http.createServer((req,res)=>{//requete response(resultat)
//     console.log('we have receveid a request!!!')
//     fs.readFile('template/index.html',{encoding:'utf-8'}, (err,data)=>{
//         res.end(data)
//     })
//     res.end('hello world')// la reponse s'arrête -- termine la requête
// }).listen(8000,()=>{//port http de base: 80
//     console.log('server running and listening port 8000')
// })


//--------------------------------------------------------------------------
const http = require('http')
const fs = require('fs')

const routes = [
    {url : '/',controller :'home'},
    {url : '/about',controller :'about'},
    {url : '/amis',controller :'amis'},

]
const router = (req,res)=>{//repond à une requete 
    let route = routes.findIndex(item =>item.url === req.url) 
    if(route !== -1){
        require(`./routes/${routes[route].controller}`)(req,res)
    }else{
        require('./routes/error')(req,res)
    }
    
}
http.createServer(router).listen(8000,()=>{//port http de base: 80
    console.log('server running and listening port 8000')
})

