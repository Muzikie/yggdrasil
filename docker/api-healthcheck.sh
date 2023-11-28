#!/bin/bash

# Send a GET request to your API
response=$(curl -s -o /dev/null -w "%{http_code}" http://api:4000/api/v1/products)

if [ "$response" == "200" ]; then
  exit 0  # API is healthy
else
  exit 1  # API is not healthy
fi
