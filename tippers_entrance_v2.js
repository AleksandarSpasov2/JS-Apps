// List of specific users that you will provide later
var specialUsers = ["one_of_the_best", "User2", "User3"];  // Replace with actual usernames

// Event handler when someone enters the chat
cb.onEnter(function(user) {
    // Check if the entered user is in the specialUsers list
    if (specialUsers.includes(user['user'])) {
        // Send a private notice only to the broadcaster
        var noticeMessage = "User " + user['user'] + " has entered the room.";
        cb.sendNotice(noticeMessage, cb.room_slug, null);

        // The same message for the yellow wall notice
        Tipping.AdvanceTracker = {
            Count: 0,
            shouldAdvance: function (tokens) {
                if (this.Count >= 15 || tokens > settings.yellow_wall_threshold) {
                    this.Count = 0;
                    return true;
                } else {
                    if (this.Count == 1) {
                        // Reuse the notice message from the user entrance
                        cb.sendNotice(noticeMessage, cb.room_slug, null);
                    }
                    this.Count++;
                    return false;
                }
            }
        };
    }
});
