#!/bin/bash

ls
echo "TOKEN: $TOKEN"
echo "ID: $ID"
echo "TYPE: $PROJECTTYPE"

rm server.js
mv README-sample.md README.md
rm .env
rm package.json

wget -qO- \
  --header "Authorization: export ${TOKEN}" \
  "https://bramble.mofostaging.net/en-US/${PROJECTTYPE}/${ID}/export/data" \
  | tar -xv
  
wget -O/dev/null -q \
  --method "PUT" \
  --header "Authorization: export ${TOKEN}" \
  "https://bramble.mofostaging.net/en-US/${PROJECTTYPE}/${ID}/export/finish"

rm import.sh
rm -f .wget-hsts
refresh
