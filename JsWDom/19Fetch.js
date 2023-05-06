// Ajax-asyncho javascript and XML

let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()//.json returns object &.text returns txt
}).then((value2) => {
        console.log(value2)
})


let p1 = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => { 
        return response.json()
}).then((response) => {
        console.log(response)
})


//first then contains response(status, ok)
//second then contains()