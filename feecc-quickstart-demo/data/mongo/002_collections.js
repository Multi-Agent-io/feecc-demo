db = connect("mongodb://localhost:27017/feeccDemo");
db.createCollection("employeeData");
db.createCollection("protocols");
db.createCollection("productionSchemas");
db.createCollection("analyticsCredentials");
db.createCollection("protocolsData");
db.createCollection("productionStagesData");
db.createCollection("unitData");
