#!/bin/sh

curl -X 'POST' \
  'http://127.0.0.1:5000/employee/log-in' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "employee_rfid_card_no": "1111111111"
}'
