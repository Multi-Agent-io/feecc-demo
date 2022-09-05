// Create a new database user database
db.createUser(
    {
        user: "root",  // Change to the desired username
        pwd: "pass",  // Change to the desired password
        roles:[
            {
                role: "readWrite",
                db:   "mydatabase"
            }
        ]
    }
);
