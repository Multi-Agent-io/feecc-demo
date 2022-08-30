db = connect("mongodb://localhost:27017/feeccDemo");
db.employeeData.insertDocument(
    {
        "name": "Иванов Иван Иванович",
        "passport_code": "e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234",
        "position": "Тестовый сотрудник",
        "rfid_card_id": "1111111111"
    }
);
db.productionSchemas.insertDocuments(
    [
        {},
    ]
);
