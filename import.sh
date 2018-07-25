#!/bin/bash

ls
echo $TOKEN
echo $ID

wget -qO- \
  --header "Authorization: bearer ${TOKEN}" \
  "https://thimble.mozilla.org/en-US/projects/${ID}/files/data" \
  | tar xvz

refresh
