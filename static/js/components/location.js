/**
 *  sends the user location to rasa
 * @param {Object} position json object
 */
function getUserPosition(position) {
    // here you to add the intent which you want to trigger
    const response = `/inform{"latitude":${position.coords.latitude},"longitude":${position.coords.longitude}}`;
    $("#userInput").prop("disabled", false);
    // eslint-disable-next-line no-use-before-define
    send(response);
    showBotTyping();
}

/**
 *  handles error while accessing the user's geolocation
 * @param {Object} error json object
 */
function handleLocationAccessError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
        default:
            break;
    }

    const response = '/inform{"user_location":"deny"}';
    // eslint-disable-next-line no-use-before-define
    send(response);
    showBotTyping();
    $(".usrInput").val("");
    $("#userInput").prop("disabled", false);
}

/**
 *  fetches the user location from the browser
 */
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            getUserPosition,
            handleLocationAccessError,
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
