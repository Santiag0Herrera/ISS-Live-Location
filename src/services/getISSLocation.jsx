
export async function getISSLocation () {
    let ISSData = {}
    const API = {url: 'http://api.open-notify.org/iss-now.json', proxyURL: 'https://cors-anywhere.herokuapp.com/'}
    const APIurl = API.proxyURL + API.url //we add the proxyURL so the API call can be made by HTTPS
    await fetch(APIurl)
        .then(res => res.json())
        .then(data => {
            ISSData = {lat: data.iss_position.latitude, lng: data.iss_position.longitude}
        })
        return ISSData
}