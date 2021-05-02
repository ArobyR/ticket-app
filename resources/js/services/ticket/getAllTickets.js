import axios from 'axios';
import {list_ticket} from '../../config/Urls';

export const getAllTickets = async () => {
    try {
        const response = await axios.get(list_ticket);
        const data = await response.data
        return data;
    } catch (error) {
        console.error(error);
    }
}