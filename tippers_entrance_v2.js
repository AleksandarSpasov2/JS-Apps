// List of specific users with their associated values
var specialUsers = [
    { user: "User1", amount: "$500" },
    { user: "User2", amount: "$300" },
    { user: "User3", amount: "$1000" }
];

// Event handler when someone enters the chat
cb.onEnter(function(user) {
    // Find the user in the specialUsers list
    var foundUser = specialUsers.find(u => u.user === user['user']);

    // If the user is in the specialUsers list
    if (foundUser) {
        // Send a private notice only to the broadcaster with a dark purple color and the associated amount
        cb.sendNotice(":moneyfly " + foundUser.user + " has entered the room " + foundUser.amount + " :moneyfly", cb.room_slug, null, "#9400D3", 'bold');
    }
});
