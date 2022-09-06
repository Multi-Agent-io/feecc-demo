// Create a sample employee account for testing
db.employeeData.insertOne(
    {
        "name": "Иванов Иван Иванович",
        "passport_code": "e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234",
        "position": "Тестовый сотрудник",
        "rfid_card_id": "1111111111"
    }
);

// Add a few production schemas for testing
db.productionSchemas.insertMany(
    [
        {
            "parent_schema_id": null,
            "production_stages": [
                {
                    "name": "Извлечь детали",
                    "type": "Подготовка",
                    "description": "Открыть коробку, вынуть пакет и инструкцию, вскрыть пакет и выложить детали на сборочный стол.",
                    "equipment": [
                        "Коробка с конструктором"
                    ],
                    "workplace": "Сборочный стол",
                    "duration_seconds": 0,
                    "stage_id": "0f27b91ac8654eda8efb25e5125ed93b"
                },
                {
                    "name": "Собрать конструктор Грузовик",
                    "type": "Сборка",
                    "description": "Собрать конструктор грузовик согласно инструкции.",
                    "equipment": [],
                    "workplace": "Сборочный стол",
                    "duration_seconds": 0,
                    "stage_id": "d79f608508c74a8ea7c45b76efece198"
                },
                {
                    "name": "Упаковка сборки",
                    "type": "Упаковка",
                    "description": "Положить собранный конструктор в контейнер, наклеить этикетку.",
                    "equipment": [
                        "Упаковочный контейнер"
                    ],
                    "workplace": "Сборочный стол",
                    "duration_seconds": 0,
                    "stage_id": "ab62b33e3acf44e192479429d721fca9"
                }
            ],
            "required_components_schema_ids": null,
            "schema_id": "3fa0cb87bdfc4438a4236d31aa6742be",
            "schema_type": "Конструктор",
            "unit_name": "Конструктор Грузовик"
        }
    ]
);
