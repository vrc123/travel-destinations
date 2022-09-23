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

    if (travelDestination.title !== "") {
        if (isNaN(travelDestination.title[0])) {
            if (travelDestination.title[0].toUpperCase() === travelDestination.title[0]) {
                if (travelDestination.description !== "") {
                    if (travelDestination.description.length >= 50 && travelDestination.description.length <= 100) {
                        if (isNaN(travelDestination.description[0])) {
                            if (travelDestination.description[0].toUpperCase() === travelDestination.description[0]) {
                                if (travelDestination.country !== "") {
                                    if (isNaN(travelDestination.country)) {
                                        if (travelDestination.country[0].toUpperCase() === travelDestination.country[0]) {
                                            if (travelDestination.location !== "") {
                                                if (isNaN(travelDestination.location[0])) {
                                                    if (travelDestination.location[0].toUpperCase() === travelDestination.location[0]) {
                                                        const response = await postData(travelDestination);
                                                        if (response.status === 201) {
                                                            console.log("Traveldestination is created!")
                                                        } else {
                                                            console.log("ERROR: Something went wrong!")    
                                                        }
                                                    }
                                                    else {
                                                        alert("ERROR: Location must be capitalized!")
                                                    }
                                                }
                                                else {
                                                    const response = await postData(travelDestination);
                                                        if (response.status === 201) {
                                                            console.log("Traveldestination is created!")
                                                        } else {
                                                            console.log("ERROR: Something went wrong!")    
                                                        }
                                                }
                                            } else {
                                                alert("ERROR: Location input field is empty!")
                                            }
                                        }
                                        else {
                                            alert("ERROR: Location must be capitalized!")
                                        }
                                    }
                                    else {
                                        alert("ERROR: Country must only contain letters!")
                                    }
                                } else {
                                    alert("ERROR: Country input field is empty!")
                                }
                            }
                            else {
                                alert("ERROR: Description must be capitalized!")
                            }
                        }
                        else {
                            if (travelDestination.country !== "") {
                                if (isNaN(travelDestination.country)) {
                                    if (travelDestination.country[0].toUpperCase() === travelDestination.country[0]) {
                                        if (travelDestination.location !== "") {
                                            if (isNaN(travelDestination.location[0])) {
                                                if (travelDestination.location[0].toUpperCase() === travelDestination.location[0]) {
                                                    const response = await postData(travelDestination);
                                                    if (response.status === 201) {
                                                        console.log("Traveldestination is created!")
                                                    } else {
                                                        console.log("ERROR: Something went wrong!")    
                                                    }
                                                }
                                                else {
                                                    alert("ERROR: Location must be capitalized!")
                                                }
                                            }
                                            else {
                                                const response = await postData(travelDestination);
                                                    if (response.status === 201) {
                                                        console.log("Traveldestination is created!")
                                                    } else {
                                                        console.log("ERROR: Something went wrong!")    
                                                    }
                                            }
                                        } else {
                                            alert("ERROR: Location input field is empty!")
                                        }
                                    }
                                    else {
                                        alert("ERROR: Location must be capitalized!")
                                    }
                                }
                                else {
                                    alert("ERROR: Country must only contain letters!")
                                }
                            } else {
                                alert("ERROR: Country input field is empty!")
                            }
                        }
                    }
                    else {
                        alert("ERROR: Description must be between 50 and 100 characters!")
                    }
                } else {
                    alert("ERROR: Description input field is empty!")
                }
            }
            else {
                alert("ERROR: Title must be capitalized!")
            }
        }
        else {
            if (travelDestination.description !== "") {
                if (travelDestination.description.length >= 50 && travelDestination.description.length <= 100) {
                    if (isNaN(travelDestination.description[0])) {
                        if (travelDestination.description[0].toUpperCase() === travelDestination.description[0]) {
                            if (travelDestination.country !== "") {
                                if (isNaN(travelDestination.country)) {
                                    if (travelDestination.country[0].toUpperCase() === travelDestination.country[0]) {
                                        if (travelDestination.location !== "") {
                                            if (isNaN(travelDestination.location[0])) {
                                                if (travelDestination.location[0].toUpperCase() === travelDestination.location[0]) {
                                                    const response = await postData(travelDestination);
                                                    if (response.status === 201) {
                                                        console.log("Traveldestination is created!")
                                                    } else {
                                                        console.log("ERROR: Something went wrong!")    
                                                    }
                                                }
                                                else {
                                                    alert("ERROR: Location must be capitalized!")
                                                }
                                            }
                                            else {
                                                const response = await postData(travelDestination);
                                                    if (response.status === 201) {
                                                        console.log("Traveldestination is created!")
                                                    } else {
                                                        console.log("ERROR: Something went wrong!")    
                                                    }
                                            }
                                        } else {
                                            alert("ERROR: Location input field is empty!")
                                        }
                                    }
                                    else {
                                        alert("ERROR: Location must be capitalized!")
                                    }
                                }
                                else {
                                    alert("ERROR: Country must only contain letters!")
                                }
                            } else {
                                alert("ERROR: Country input field is empty!")
                            }
                        }
                        else {
                            alert("ERROR: Description must be capitalized!")
                        }
                    }
                    else {
                        if (travelDestination.country !== "") {
                            if (isNaN(travelDestination.country)) {
                                if (travelDestination.country[0].toUpperCase() === travelDestination.country[0]) {
                                    if (travelDestination.location !== "") {
                                        if (isNaN(travelDestination.location[0])) {
                                            if (travelDestination.location[0].toUpperCase() === travelDestination.location[0]) {
                                                const response = await postData(travelDestination);
                                                if (response.status === 201) {
                                                    console.log("Traveldestination is created!")
                                                } else {
                                                    console.log("ERROR: Something went wrong!")    
                                                }
                                            }
                                            else {
                                                alert("ERROR: Location must be capitalized!")
                                            }
                                        }
                                        else {
                                            const response = await postData(travelDestination);
                                                if (response.status === 201) {
                                                    console.log("Traveldestination is created!")
                                                } else {
                                                    console.log("ERROR: Something went wrong!")    
                                                }
                                        }
                                    } else {
                                        alert("ERROR: Location input field is empty!")
                                    }
                                }
                                else {
                                    alert("ERROR: Location must be capitalized!")
                                }
                            }
                            else {
                                alert("ERROR: Country must only contain letters!")
                            }
                        } else {
                            alert("ERROR: Country input field is empty!")
                        }
                    }
                }
                else {
                    alert("ERROR: Description must be between 50 and 100 characters!")
                }
            } else {
                alert("ERROR: Description input field is empty!")
            }
        }
    } else {
        alert("ERROR: Title input field is empty!")
    }
});