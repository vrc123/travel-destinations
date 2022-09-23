// HTTP POST method
async function postData(travelDestination) {
    const response = await fetch("http://127.0.0.1:3000/traveldestination", {
      method: "POST",
      body: JSON.stringify(travelDestination),
      headers: {
        "Content-Type": "application/json"
    }
    });
    return response;
}

// Create new document
const createForm = document.querySelector("#createForm");

createForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const travelDestination = {
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        dateFrom: document.querySelector("#dateFrom").value,
        dateTo: document.querySelector("#dateTo").value,
        country: document.querySelector("#country").value,
        location: document.querySelector("#location").value,
        googleMapsLink: document.querySelector("#googleMapsLink").value,
    };

    if (travelDestination.title != "") {
        if (travelDestination.description != "") {
            const response = await postData(travelDestination);
            if (response.status === 201) {
                console.log("Traveldestination is created!")
            } else {
                console.log("ERROR: Something went wrong!")    
            }
        }
        } else {
            console.log("ERROR: Your title is empty!")
        }
    } else {
        console.log("ERROR: Your title is empty!")
    }
});


//travelDestination.title[0].toUpperCase() === travelDestination.title[0]