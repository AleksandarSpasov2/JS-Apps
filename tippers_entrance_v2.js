// List of specific users that you will provide later
var specialUsers = ["User1", "User2", "User3"];  // Replace with actual usernames

// Event handler when someone enters the chat
cb.onEnter(function(user) {
    // Check if the entered user is in the specialUsers list
    if (specialUsers.includes(user['user'])) {
        // Send a private notice only to the broadcaster
        cb.sendNotice("User " + user['user'] + " has entered the room.", cb.room_slug, null);
        
        // Send an additional informational notice to the broadcaster like in the first program
        Messenger.sendInfoMessage(user['user'] + " has entered the room.", cb.room_slug, null);
    }
});

// Ensure Messenger object is defined as in the first program

var Messenger = {
    sendInfoMessage: function (str, recipient, group) {
        cb.sendNotice(str, recipient, null, "#000000", 'bold', group);
    }
};
