#!/bin/bash

ls
echo $TOKEN
echo $ID

rm server.js
rm import.sh
rm README.md
rm .env
rm package.json

wget -qO- \
  --header "Authorization: bearer ${TOKEN}" \
  "https://thimble.mozilla.org/en-US/projects/${ID}/files/data" \
  | tar -xv

rm -f .wget-hsts
refresh
