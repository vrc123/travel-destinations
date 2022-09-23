async function getData() {
    const response = await fetch("http://127.0.0.1:3000/traveldestination");
    const body = await response.json();
    return body;
}

async function displayData(){
    const data = await getData();

    const chartBox = document.getElementsByClassName("chartBox")[0];
    console.log(chartBox)

    data.forEach((data, index) => {
        let travelDestinationIdElement = document.createElement("div");
        let travelDestinationIdElement = document.createElement("p");
        let travelDestinationTitleElement = document.createElement("p");
        let travelDestinationDescriptionElement = document.createElement("p");
        let travelDestinationDateFromElement = document.createElement("p");
        let travelDestinationDateToElement = document.createElement("p");
        let travelDestinationCountryElement = document.createElement("p");
        let travelDestinationLocationElement = document.createElement("p");
        let travelDestinationGoogleMapsLinkElement = document.createElement("p");
        
        let travelDestinationId = document.createTextNode(`Id: ${data._id}`);
        let travelDestinationTitle = document.createTextNode(`Title: ${data.title}`);
        let travelDestinationDescription = document.createTextNode(`Description: ${data.description}`);
        let travelDestinationDateFrom = document.createTextNode(`Date from: ${data.dateFrom}`);
        let travelDestinationDateTo = document.createTextNode(`Date to: ${data.dateTo}`);
        let travelDestinationCountry = document.createTextNode(`Country: ${data.country}`);
        let travelDestinationLocation = document.createTextNode(`Location: ${data.location}`);
        let travelDestinationGoogleMapsLink = document.createTextNode(`Google Maps link: ${data.googleMapsLink}`);
        
        travelDestinationIdElement.appendChild(travelDestinationId);
        travelDestinationTitleElement.appendChild(travelDestinationTitle);
        travelDestinationDescriptionElement.appendChild(travelDestinationDescription);
        travelDestinationDateFromElement.appendChild(travelDestinationDateFrom);
        travelDestinationDateToElement.appendChild(travelDestinationDateTo);
        travelDestinationCountryElement.appendChild(travelDestinationCountry);
        travelDestinationLocationElement.appendChild(travelDestinationLocation);
        travelDestinationGoogleMapsLinkElement.appendChild(travelDestinationGoogleMapsLink);
        
        chartBox.appendChild(travelDestinationIdElement);
        chartBox.appendChild(travelDestinationTitleElement);
        chartBox.appendChild(travelDestinationDescriptionElement);
        chartBox.appendChild(travelDestinationDateFromElement);
        chartBox.appendChild(travelDestinationDateToElement);
        chartBox.appendChild(travelDestinationCountryElement);
        chartBox.appendChild(travelDestinationLocationElement);
        chartBox.appendChild(travelDestinationGoogleMapsLinkElement);
    });
}

displayData();