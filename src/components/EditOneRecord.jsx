import { React, useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editRecord, getRecord} from '../services/record-api'


function EditOneRecord() {
    const [data, setData] = useState([])
    let navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        getRecord(id)
        .then((res) => setData(res.data))
    },[])

const editOne = (event)=> {
        let edited = { artist: event.target.artist.value,
            title: event.target.title.value,
            cover: event.target.cover.value,
            year: event.target.year.value,
            genre: event.target.genre.value,
            sound: event.target.sound.value
        }
        editRecord(id, edited)
        navigate(`/${id}`)
    }

  return (
    <div>
        
        <form onSubmit={editOne}>
        Artist: <input type='text' name='artist' defaultValue={data.artist}/><br/>
        Album Title: <input type='text' name='title' defaultValue={data.title}/><br/>
        Cover Art: <input type='text' name='cover' defaultValue={data.cover}/><br/>
        Year: <input type='number' name='year' defaultValue={data.year}/><br/>
        Genre: <input type='text' name='genre' defaultValue={data.genre}/><br/>
        Sound: <input type='text' name='sound' defaultValue={data.sound}/><br/>
        <input type='submit' value='Edit Record'/>
    </form>
    </div>
  )
}

export default EditOneRecord