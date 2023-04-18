import axios from "axios"

export const checkAuth = async (email, password) => {
    try {
        const response = await axios.post('auth/login', { email, password })
        const token = response.data.token

        await axios.get('/auth/check', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}