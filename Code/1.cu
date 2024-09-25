$ curl -X POST "https://api.soundcloud.com/tracks" \
       -H  "accept: application/json; charset=utf-8" \
       -H "Authorization: OAuth ACCESS_TOKEN" \
       -H  "Content-Type: multipart/form-data" \
       -F "track[title]=YOUR_TITLE" \
       -F "track[asset_data]=@PATH_TO_A_FILE"