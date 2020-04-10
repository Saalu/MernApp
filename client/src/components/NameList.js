import React from 'react'
import Person from './Person'
function NameList() {

    const persons = [
        {
            id:1,
            name:'Larry',
            age:20,
        },
        {
            id:2,
            name:'Sinno',
            age:26,
        },
        {
            id:3,
            name:'Ginno',
            age:28,
        }
       
       
    ]

const personList = persons.map(person=>
     <Person key={person.id} person={person}/>)
    console.log(personList)
    return (<div> {  personList }   </div>
    )
}

export default NameList
