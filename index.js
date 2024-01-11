const request = require('request');

// Request Twitch API Access Token

function requestToken() {
    const options = {
        url: 'https://id.twitch.tv/oauth2/token',
        json: true,
        body: {
            client_id: '<YOUR CLIENT ID>',
            client_secret: '<YOUR CLIENT SECRET>',
            grant_type: 'client_credentials'
        }
    };

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`\nToken Status: ${res.statusCode}`);
        console.log(body);
    });
}

requestToken();