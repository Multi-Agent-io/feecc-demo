// Connect to the database
db = connect("mongodb://localhost:27017/feeccDemo");

// Create required collections
db.createCollection("employeeData");
db.createCollection("protocols");
db.createCollection("productionSchemas");
db.createCollection("analyticsCredentials");
db.createCollection("protocolsData");
db.createCollection("productionStagesData");
db.createCollection("unitData");

// Generate indexes for quicker access
db.employeeData.createIndex(
    {
        rfid_card_id: "text"
    }
);
db.productionSchemas.createIndex(
    {
        schema_id: "text",
        parent_schema_id: 1
    }
);
db.analyticsCredentials.createIndex(
    {
        username: "text"
    }
);
db.productionStagesData.createIndex(
    {
        id: 1,
        parent_unit_uuid: "text"
    }
);
db.unitData.createIndex(
    {
        internal_id: "text",
        uuid: 1,
        status: 1
    }
);
