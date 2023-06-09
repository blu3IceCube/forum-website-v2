import axios from "axios"

export async function getCommunity() {
    const response = await axios.get('http://localhost:8080/community')

    if (response.status !== 200) {
        const error = new Error("There was an error.")
        throw error
    }

    return response.data
}