import axios from 'axios';

export const getAllTickets = async () => {
    try {
        const response = await axios.get('api/ticket.list');
        const responseData = await response.data;
        return responseData;
    } catch (error) {   console.error(error);   }
}

export const getCodigoTicket = async (id) => {
    try {
        const response = await axios.get('api/ticket.codigo/' + id);
        const responseData = await response.data;
        return responseData;
    } catch (error) {   console.error(error);   }
}

export const getCancelados = async () => {
    try {
        const response = await axios.get('api/ticket.cancelados');
        const responseData = await response.data;
        return responseData;
    } catch (error) {    console.error(error);   }
}

export const getAtendidos = async () => {
    try {
        const response = await axios.get('api/ticket.atendidos');
        const responseData = await response.data;
        return responseData;
    } catch (error) {    console.error(error);   }
}

export const getAtendidosCancelados = async () => {
    try {
        const response = await axios.get('api/ticket.atendidos-cancelados');
        const responseData = await response.data;
        return responseData;
    } catch (error) {
    console.error(error);    }
}

export const getAtendidosMes = async () => {
    try {
        const response = await axios.get('api/ticket.atendidos-mes');
        const responseData = await response.data;
        return responseData;
    } catch (error) {    console.error(error);   }
}

export const getCanceladosMes = async () => {
    try {
        const response = await axios.get('api/ticket.cancelados-mes');
        const responseData = await response.data;
        return responseData;
    } catch (error) {    console.error(error);   }
}

export const getAtendidosCanceladosMes = async () => {
    try {
        const response = await axios.get('api/ticket.atendidos-cancelados-mes');
        const responseData = await response.data;
        return responseData;
    } catch (error) {    console.error(error);    }
}

export const createTicket = async (data) => {
    try {
        const response = await axios.post('api/ticket.insert', data);
        const responseData = await response;
        return responseData;
    } catch (error) {    console.error(error);}
}

export const deleteTicket = async (id) => {
    try {
        const response = await axios.get('api/ticket.delete/' + id);
        const responseData = await response.data;
        return responseData;
    } catch (error) {    console.error(error);    }
}

