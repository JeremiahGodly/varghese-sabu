#!/usr/bin/env bash
# Quick server runner for Advocate Varghese Sabu Website
PORT=3000
echo "=========================================================="
echo " Starting Advocate Varghese Sabu Professional Website"
echo " Local URL: http://localhost:$PORT"
echo "=========================================================="
python3 -m http.server $PORT
