import axios from 'axios';

export const fetchProjectData = (key, id) => {
    console.log(key, id)
    // const link = 'http://localhost:3001/projects/' + id;
    return axios.get('http://localhost:3001/projects/')
}