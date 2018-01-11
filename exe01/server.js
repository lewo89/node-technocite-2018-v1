// const arr = []
//  arr.push('test')
//  arr[1] ='test2'
//---------------
//var a = 3
//function test(){
//    var a = 5
//}
//---------------
// let a = 4
// {
//     let a=3
// }
// console.log(a)
//-----------------
// (function(msg){
//     console.log(msg)
// })('hello')

//---------------
// var obj ={
//     name: 'leonore',
//     job:'student',
//     toString : function(){
//         return `name is ${this.name} job is ${this.job}`
//     }
// }
// console.log(obj.toString())
//-------------------------
// const[a,b]=['leonore','delporte']
// console.log(b)
// console.log(a)
//---------------------------
// const numbers = [1,2,3,4,5,6,7,8]
// function dblNumbers(arr){
//     const arrDbl =[]
//     for (let i=0,length=arr.length;i<length;i++){
//         arrDbl.push(arr[i]*2)
//     }
//     return arrDbl;
// }
// console.log(dblNumbers(numbers))
//--------------------------
const numbers = [1,2,3,4,5,6,7,8]
function dblNumbers(arr){
    // return arr.map(function(item){
    //     return item *2
    // })
//c'est la même chose que:  
    return arr.map(item=>item*2)
}
console.log(dblNumbers(numbers))
//----------------------
console.log(numbers.reduce((prev,current)=>{
//console.log(prev,current)
    return prev+current
},0))//1ere valeure utilisé
//--------------------
// 
// .map validé un nouvel array modifié
// .filter filtre 
// .reduce manipuler un array pour avoir une nouvelle valeur
//.toString change en array