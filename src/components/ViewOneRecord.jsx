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

    <div>
    Artist<h3>{record.artist}</h3>
    Title:<h3>{record.title}</h3>
    Year:<h3>{record.year}</h3>
    Genre:<h3>{record.genre}</h3>
    Album Cover:<img src={record.cover}/>


    <br/>
    <button style={{borderRadius:'7px' }} onClick={deleteOneRecord}> Delete this record </button><br/>
    
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate(`/${id}/editRecord`)}}> Edit this record </button><br/>
    
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate('/')}}> Back to list </button>
    
    
    </div>
  )
}

export default ViewOneRecord