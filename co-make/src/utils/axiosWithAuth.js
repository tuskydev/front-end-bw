import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        headers: {
            "Authorization": `${token}`
        },
        baseURL: 'https://co-make-bw.herokuapp.com/'
    })
}