import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getRecord} from '../services/record-api'
import {deleteRecord} from '../services/record-api'

function ViewOneRecord() {
    const navigate= useNavigate()
    const {id} = useParams()
    const [record, setRecord] = useState([])
    
      useEffect(()=>{
          getRecord(id)
          .then((res) => setRecord(res.data))
      },[id])

      const deleteOneRecord = ()=>{
        deleteRecord(id)
        navigate('/')
}

  return (

    <div id={'onerecord'}>
    Artist: {record.artist}<br/>
    Title: {record.title}<br/>
    Year: {record.year}<br/>
    Genre: {record.genre}<br/>
    Album Cover: <br/><img style={{height:'200px'}} src={record.cover}/>


    <br/>
    <button style={{borderRadius:'7px' }} onClick={deleteOneRecord}> Delete this record </button><br/>
    
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate(`/${id}/editRecord`)}}> Edit this record </button><br/>
    
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate('/')}}> Back to list </button>
    
    
    </div>
  )
}

export default ViewOneRecord