import {get_users, insert_user, delete_user} from '../../config/Urls'
import axios from 'axios'

export const insertUser = async (user) => {
    try {
        const response = await axios.post(insert_user, JSON.stringify(user))
        const data = await response.data
        return data
    } catch(error) {
        console.error(error)
    }
}

export const getAllUsers = async () => {
    try {
        const response = await axios.get(get_users)
        const info = await response.data
        return info
    } catch(error) {
        console.error(error)
    }
}

export const deleteUser = async (id) => {
    try {
        const reponse = await axios.delete(delete_user, id)
        const info = await reponse.data
        return info
    } catch(error) {
        console.log(error)
    }
}