import axios from "axios"

export async function getCommunity() {
    const response = await axios.get('http://localhost:8080/community')
    return response.data
}