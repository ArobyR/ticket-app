import axios from 'axios';
import {list_ticket, insert_ticket} from '../../config/Urls';

export const getAllTickets = async () => {
    try {
        const response = await axios.get(list_ticket);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const createTicket = async (information) => {
    try {
        // console.log(information)
        const reponse = await axios.post(insert_ticket, information);
        const data = await reponse.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}