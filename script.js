//const chalk = require('chalk');
//const axios = require("axios")
// const newTodo = {
//     "isDone": true
// }
// console.log(chalk.keyword('orange')('Yay for orange colored text!'));
// console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// console.log(chalk.hex('#ff0000').bold('Bold gray!'));


// axios("https://6115f1078f38520017a38648.mockapi.io/todos/22")
//     .then(results => console.log(results.data))                      //get запрос

// axios.delete("https://6115f1078f38520017a38648.mockapi.io/todos/22")
//     .then(results => console.log(results.data))                      //delete удаление

//
// axios.post("https://6115f1078f38520017a38648.mockapi.io/todos/", newTodo)
//     .then(results => console.log(results.data))                      //post добавить



// axios.put("https://6115f1078f38520017a38648.mockapi.io/todos/34", newTodo)
//     .then(results => console.log(results.data))                         //put изменить с помощью id


 // const getPeople = async (id) => {
 //    let isLoading = true
 //    try{
 //        // throw new Error("Моя ошибка")
 //        const example = await axios (`https://swapi.dev/api/people/${id}`)
 //        console.log(55)
 //        console.log(example.data)
 //    } catch (error){
 //        console.log(777)
 //    }finally {
 //        isLoading = false
 //         console.log(isLoading)
 //     }
 // }
 // getPeople(4)


const axios = require("axios")
const getPerson = async (id) => {
    const {data:person} = await axios (`https://swapi.dev/api/people/${id}`)


    const allFilms = await Promise.all(person.films.map(async (link) => {
        const {data:movie} = await axios(link)
        return movie
    }))
    console.log({...person, films:allFilms})
}
getPerson(4)


// import {sayGreting} from "./greeting.js"
// console.log(sayGreting("en"))
// console.log(sayGreting("kg"))



























