
const helpers = {

    async sendRequest(request) {
        try {
            let response = await fetch(request)
            if (response.ok) {
                return await response.json()
            } else {
                console.log(response.status)
            }
        } catch (e) {
            console.log(e)
        }
    }

}

export default helpers