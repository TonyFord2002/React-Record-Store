import React from 'react'
import {useState, useEffect} from 'react'
import {getRecords} from '../services/record-api'


function RecordsList() {
    const [List, setList] = useState([])

    useEffect(()=>{
        getRecords()
        .then((res) => setList(res.data))
    },[])

  return (
    <>
    <div style={{color:'blue', fontFamily:'cursive'}}><h1 >Records List</h1>
    <h3><a href= {`/addRecord`}>Add a new Record</a></h3>
    <ul style={{listStyleType:'repeating-emoji'}}>
    {List.map((List, i)=>{
      return(
        <li key={i} >
          <h2><a href = {`/${List._id}`}>{List.artist}</a></h2>
        </li>
      )
    })}
    </ul>
    </div>

    </>
   

  )
}

export default RecordsList