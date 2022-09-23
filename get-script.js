async function getData() {
    const response = await fetch("http://127.0.0.1:3000/traveldestination");
    const body = await response.json();

    for (let i = 0; i < body.length; i++) {
        console.log(body[i])
        console.log(body[i].title)
        console.log(body[i].description)
        console.log(body[i].dateFrom)
        console.log(body[i].dateTo)
        console.log(body[i].country)
        console.log(body[i].location)
        console.log(body[i].googleMapsLink)
    }
}