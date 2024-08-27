export const config = {
    headers: {
        Authorization: localStorage.getItem('token'),
    }
}

export const imgConfig = {
    headers: {
        'multipart/type': 'multipart/form-data',
        Authorization: ` ${localStorage.getItem('token')}`,
    }
}

export const setConfig = () => config.headers.Authorization = localStorage.getItem('token')
