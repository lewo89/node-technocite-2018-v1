// const fs = require('fs')
// fs.readFile('liste.txt',{encoding:'utf8'}, (err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
// console.log(__dirname)//montre l'endroit ou je suis
// console.log(process.cwd());//donne moi l'endroit ou il s'execute maintenant
//----------------
// console.log(process.argv[2])
// const fs = require('fs')
// fs.readFile(`${process.cwd()}/liste.txt`,{encoding:'utf8'}, (err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
//---------------------------------------------
// je rajoute dans le terminal, par exemple :  node server.js add TEST
const [action, value] = [process.argv[2],process.argv[3]]  // donc si j'ai mis add test  add remplace action et test = value

const possibleActions = ['add', 'remove']  // on crée une var en disant que on peut avoir que add et remove
const fileMeger = ('./tpk/fileManager')
const checkActions = (action) => {  // action = add
    return possibleActions.filter(item => item === action).length > 0  // on compare dans possible actions ( add remove) si c'est === a dans la var action à add et donc que c'est 1
}
//function checkValue(value){
//    let returnValue = false
//    if(value !== null || value !== undefined || value !==0 || value !== NaN){
//    returnValue = true
//    }
//    return returnValue
//  }

const checkValue = (value) => (value) ? true : false  // ici c'est value la function dit si il y a une value if(value) ici y a test tu me return true sinon tu me retourn false

const init = () => {
    if (!checkActions(action)) {  // si check ACTION est false donc on as pas mis add ou remove
        console.log(`Error : the possible actions are :
                                   -add
                                   -remove`)
    } else if (!checkValue(value)) { // si check VALUE est false on as rien mis apres le add dans le terminal
        console.log('Error : You need give value for insertion !!!')        
    }else{
        fileMeger.init('liste.txt', action, value)
    }
}
init()