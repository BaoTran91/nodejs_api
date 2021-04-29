var Request = require("request");
var fs = require("fs");


Request.get("http://localhost:1500/nifi-api/process-groups/69ad463d-0162-1000-1c25-c0ed50ae8a58", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log("API Request Successful.");
    fs.writeFile("APIResult.json", body, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
});