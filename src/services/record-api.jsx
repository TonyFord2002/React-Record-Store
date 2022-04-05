import axios from 'axios'
const url = 'http://localhost:3001/records/'

export function getRecords(){
    const response = axios.get(url)
    return response
}

export function getRecord(id){
    const response = axios.get(url+id)
    return response
}

export function deleteRecord(id){
    const response = axios.delete(url+id)
    return response
}

export function createRecord(add){
    const response = axios.post(url, add)
    return response
}

export function editRecord(id, edited){
    const response = axios.put(url+id, edited)
    return response
}