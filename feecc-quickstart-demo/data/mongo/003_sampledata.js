// Connect to the database
db = connect("mongodb://localhost:27017/feeccDemo");

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
        },
        {
            "parent_schema_id": null,
            "production_stages": [
                {
                    "name": "Подготовить кабель питания",
                    "type": "Подготовка",
                    "description": "Зачистить с двух концов отрезок кабеля ШВВПн 2х0.75, вставить две жилы кабеля в коннектор согласно цветовой схемы.",
                    "equipment": [
                        "Кабель ШВВПн 2х0.75",
                        "Коннектор для разъема DC 12 V",
                        "Нож"
                    ],
                    "workplace": "Сборочный стол",
                    "duration_seconds": 0,
                    "stage_id": "1e460bc6dae241e89de7f7dda89d47b8"
                },
                {
                    "name": "Присоединить кабель питания к плате датчика",
                    "type": "Сборка",
                    "description": "Сделать отверстие в резиновой заглушке коробки. Протянуть кабель через заглушку. Присоединить кабель к пинам 12V и GND платы согласно схемы.",
                    "equipment": [
                        "Кабель питания",
                        "Плата с датчиком SDS-011",
                        "Распределительная коробка с заглушками",
                        "Крестовая отвертка",
                        "Нож"
                    ],
                    "workplace": "Сборочный стол",
                    "duration_seconds": 0,
                    "stage_id": "01231f8d5ebd4f5296711306b414add1"
                },
                {
                    "name": "Присоединить датчик влажности к плате",
                    "type": "Сборка",
                    "description": "Сделать отверстие в резиновой заглушке коробки. Протянуть кабели датчика через заглушку. Присоединить датчик влажности к плате согласно схемы.",
                    "equipment": [
                        "Датчик влажности",
                        "Плата с датчиком SDS-011",
                        "Распределительная коробка с заглушками",
                        "Крестовая отвертка",
                        "Нож"
                    ],
                    "workplace": "Сборочный стол",
                    "duration_seconds": 0,
                    "stage_id": "5a83cbe24e224329ac959725565bdf65"
                },
                {
                    "name": "Присоединить шланг воздухозаборника к датчику SDS-011",
                    "type": "Сборка",
                    "description": "Сделать отверстие в резиновой заглушке коробки. Протянуть шланг воздухозаборника через заглушку. Присоединить шланг воздухозаборника к датчику.",
                    "equipment": [
                        "Шланг воздухозаборника",
                        "Плата с датчиком SDS-011",
                        "Распределительная коробка с заглушками",
                        "Нож"
                    ],
                    "workplace": "Сборочный стол",
                    "duration_seconds": 0,
                    "stage_id": "8abef8b8cd2e476e8d3e7f0845b7ba2c"
                },
                {
                    "name": "Упаковка сборки",
                    "type": "Упаковка",
                    "description": "Закрыть крышку коробки, проверить расположение шланга, кабелей и датчика влажности, наклеить этикету на коробку.",
                    "equipment": [
                        "Распределительная коробка с датчиками"
                    ],
                    "workplace": "Сборочный стол",
                    "duration_seconds": 0,
                    "stage_id": "a8aa91bf34ec4fee95a0a2bdd2ee17b7"
                }
            ],
            "required_components_schema_ids": null,
            "schema_id": "bb52b37d783a4e419a2535c069f9f7e0",
            "schema_type": "Датчик",
            "unit_name": "Датчик SDS-011 с микроконтроллером"
        }
    ]
);
