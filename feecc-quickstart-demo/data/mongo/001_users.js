// Create a new database user database
db.createUser(
    {
        user: "root",
        pwd: "pass",
        roles:[
            {
                role: "readWrite",
                db:   "mydatabase"
            }
        ]
    }
);
