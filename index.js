


function incbyone(id){
  let cnt = document.getElementById("id")
  let x = cnt.value
  cnt.innerText = x + 1
}

function inc1(elementId) {
    // Get the element by ID
    const element = document.getElementById(elementId);

    // Check if the element exists
    if (element) {
        // Parse the current value as an integer (default to 0 if it's not a number)
        let currentValue = parseInt(element.innerText, 10) || 0;

        // Increment the value
        element.innerText = currentValue + 1;
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}

function inc2(elementId) {
    // Get the element by ID
    const element = document.getElementById(elementId);

    // Check if the element exists
    if (element) {
        // Parse the current value as an integer (default to 0 if it's not a number)
        let currentValue = parseInt(element.innerText, 10) || 0;

        // Increment the value
        element.innerText = currentValue + 2;
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}

function inc3(elementId) {
    // Get the element by ID
    const element = document.getElementById(elementId);

    // Check if the element exists
    if (element) {
        // Parse the current value as an integer (default to 0 if it's not a number)
        let currentValue = parseInt(element.innerText, 10) || 0;

        // Increment the value
        element.innerText = currentValue + 3;
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}

