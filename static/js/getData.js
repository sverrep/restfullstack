function addTitle() {
    let title = document.createElement('h2');
    title.textContent = 'Restaurants in Berlin:';
    document.body.appendChild(title);
}

function getAllRestaurantNames(){
    
    // create a new request object
    let xhr = new XMLHttpRequest();
    // set the expected response type as JSON (the data format)
    xhr.responseType = 'json';
    // define the request by "opening" it
    xhr.open("GET", "http://127.0.0.1:5000/api/restaurants/names")

    // define what to do when the response comes back
    xhr.onload = function () {
        //create a new local variable which gets the content of the backend's response
        let restaurant_names = xhr.response;

        //now that we have an array, we can manipulate the DOM with our new, dynamic data from the backend!
        //loop over the data from the backend. For each element in the array, create a new paragraph. 
        //the content of that paragraph is the string sent from the backend,
        for (let i = 0; i < restaurant_names.length; i++){
            let paragraph = document.createElement('li');
            paragraph.textContent = restaurant_names[i];
            document.body.appendChild(paragraph);
        }

    }

    //send the request, and when it comes back, run the code above.
    xhr.send();

}