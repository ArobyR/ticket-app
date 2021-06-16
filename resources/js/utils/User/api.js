import axios from 'axios';

export const getAllUsers = async () => {
    try {
        const response = await axios.get('/api/users');
        const responseData = await response.data;
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export const getUserById = async (id) => {
    try {
        const response = await axios.get('/api/users.show/' + id);
        const responseData = await response.data;
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export const getUserUpdateById = async (id) => {
    try {
        const response = await axios.get('/api/users.update/' + id);
        const responseData = await response.data;
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export const getRol = async (id) => {
    try {
        const response = await axios.get('/api/users.rol/' + id);
        const responseData = await response.data;
        return responseData;
    } catch (error) {
        console.error(error);
    }
}



export const deleteUser = async (id) => {
    try {
        const response = await axios.get('/api/users.delete/' + id);
        const responseData = await response.data;
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (data) => {
    try {
        const reponse = await axios.post('/api/users.insert/', data);
        const responseData = await reponse.data;
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async (data) => {
    try {
        const reponse = await axios.put('/api/users.update/', data);
        const responseData = await reponse.data;
        return responseData;
    } catch (error) {
        console.error(error);
    }
}


