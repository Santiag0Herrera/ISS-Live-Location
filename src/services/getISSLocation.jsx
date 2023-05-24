
export async function getISSLocation () {
    let ISSData = {}
    await fetch('http://api.open-notify.org/iss-now.json')
        .then(res => res.json())
        .then(data => {
            ISSData = {lat: data.iss_position.latitude, lng: data.iss_position.longitude}
        })
        return ISSData
}