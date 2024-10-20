// List of specific users that you will provide later
var specialUsers = ["User1", "User2", "User3"];  // Replace with actual usernames

// Event handler when someone enters the chat
cb.onEnter(function(user) {
    // Check if the entered user is in the specialUsers list
    if (specialUsers.includes(user['user'])) {
        // Send a private notice only to the broadcaster with a dark purple color
        cb.sendNotice("User " + user['user'] + " has entered the room.", cb.room_slug, null, "#9400D3", 'bold');
    }
});
