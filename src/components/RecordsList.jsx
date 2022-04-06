import './RecordsList.css'
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
    <div id='container'>
      <h1 style={{color:'blue', fontFamily:'cursive'}} >Records List</h1>
      <h3><a href= {`/addRecord`}>Add a new Record</a></h3>
        <div id='records'>
          {List.map((List, i)=>{
            return(
              <div id='record' key={i} >
                <h2><a href = {`/${List._id}`}>{List.artist}</a></h2>
                <img style={{height:'200px', width:'200px'}} src={List.cover}/>
              </div>
            )
          })}
        </div>
    </div>
   

  )
}

export default RecordsList