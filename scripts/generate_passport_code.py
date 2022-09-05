#!/usr/bin/python3

import hashlib


def get_passport_code(rfid_card_id: str, name: str, position: str) -> str:
    """
    returns encoded employee name to put into the passport

    since unit passport will be published to IPFS, employee name is replaced with
    "employee passport code" - an SHA256 checksum of a string, which is a space-separated
    combination of employee's ID, name and position. since this data is unique for every
    employee, it is safe to assume, that collision is practically impossible.
    """

    employee_passport_string: str = " ".join([rfid_card_id, name, position])
    employee_passport_string_encoded: bytes = employee_passport_string.encode()
    return hashlib.sha256(employee_passport_string_encoded).hexdigest()


def main() -> None:
    """Entrypoint"""
    passport_code = get_passport_code(
        rfid_card_id=input("Номер RFID карты сотрудника (как в БД): "),
        name=input("Имя сотрудника (как в БД): "),
        position=input("Должность сотрудника (как в БД): "),
    )
    print(f"Код паспорта сотрудника: '{passport_code}'. Вставьте его в БД в поле 'passport_code'")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Ошибка при генерации кода: {e}")
