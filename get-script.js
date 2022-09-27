hej

async function getData() {
    const response = await fetch("http://127.0.0.1:3000/traveldestination");
    const body = await response.json();
    return body;
}

async function displayData(){
    const data = await getData();

    for(let i = 0; i < data.length ; i++) {
        const travelDestinationElement = document.createElement("div");
        travelDestinationElement.classList = "travelDestination";

        const container = document.querySelector("#container");
        container.appendChild(travelDestinationElement);

        let travelDestinationIdElement = document.createElement("p");
        let travelDestinationTitleElement = document.createElement("p");
        let travelDestinationDescriptionElement = document.createElement("p");
        let travelDestinationDateFromElement = document.createElement("p");
        let travelDestinationDateToElement = document.createElement("p");
        let travelDestinationCountryElement = document.createElement("p");
        let travelDestinationLocationElement = document.createElement("p");
        let travelDestinationGoogleMapsLinkElement = document.createElement("p");

        let travelDestinationId = document.createTextNode(`Id: ${data[i]._id}`);
        let travelDestinationTitle = document.createTextNode(`Title: ${data[i].title}`);
        let travelDestinationDescription = document.createTextNode(`Description: ${data[i].description}`);
        let travelDestinationDateFrom = document.createTextNode(`Date from: ${data[i].dateFrom}`);
        let travelDestinationDateTo = document.createTextNode(`Date to: ${data[i].dateTo}`);
        let travelDestinationCountry = document.createTextNode(`Country: ${data[i].country}`);
        let travelDestinationLocation = document.createTextNode(`Location: ${data[i].location}`);
        let travelDestinationGoogleMapsLink = document.createTextNode(`Google Maps link: ${data[i].googleMapsLink}`);

        travelDestinationIdElement.appendChild(travelDestinationId);
        travelDestinationTitleElement.appendChild(travelDestinationTitle);
        travelDestinationDescriptionElement.appendChild(travelDestinationDescription);
        travelDestinationDateFromElement.appendChild(travelDestinationDateFrom);
        travelDestinationDateToElement.appendChild(travelDestinationDateTo);
        travelDestinationCountryElement.appendChild(travelDestinationCountry);
        travelDestinationLocationElement.appendChild(travelDestinationLocation);
        travelDestinationGoogleMapsLinkElement.appendChild(travelDestinationGoogleMapsLink);

        travelDestinationElement.appendChild(travelDestinationIdElement);
        travelDestinationElement.appendChild(travelDestinationTitleElement);
        travelDestinationElement.appendChild(travelDestinationDescriptionElement);
        travelDestinationElement.appendChild(travelDestinationDateFromElement);
        travelDestinationElement.appendChild(travelDestinationDateToElement);
        travelDestinationElement.appendChild(travelDestinationCountryElement);
        travelDestinationElement.appendChild(travelDestinationLocationElement);
        travelDestinationElement.appendChild(travelDestinationGoogleMapsLinkElement);
    }
}

displayData();