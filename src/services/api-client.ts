import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '81f278713acc4ed7a92b208653b8553f'
    }
})
