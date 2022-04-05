import React from 'react'
import {useNavigate} from 'react-router-dom'
import {createRecord} from '../services/record-api'

function AddRecord() {
    const nav = useNavigate()

    const addNewRecord = (event)=>{
        event.preventDefault()
        let add = { artist: event.target.artist.value,
                    title: event.target.title.value,
                    cover: event.target.cover.value,
                    year: event.target.year.value,
                    genre: event.target.genre.value
                }
        createRecord(add)
        nav('/')
    }


  return (
<div>
    <h1>Add a Record</h1>
    <form onSubmit={addNewRecord}>
        Artist: <input type='text' name='artist'/><br/>
        Album Title: <input type='text' name='title'/><br/>
        Cover Art: <input type='text' name='cover'/><br/>
        Year: <input type='number' name='year'/><br/>
        Genre: <input type='text' name='genre'/><br/>
        <input type='submit' value='Add Record'/>
    </form>
</div>
  )
}

export default AddRecord