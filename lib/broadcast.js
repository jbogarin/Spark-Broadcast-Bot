var Notifications = require(__dirname + '/notifications.js');
var Topics = require(__dirname + '/topics.js');
var Messages = require(__dirname + '/messages.js');
var Auth = require(__dirname + '/auth.js');

module.exports = {
    notifications: Notifications,
    topics: Topics,
    messages: Messages,
    auth: Auth
};