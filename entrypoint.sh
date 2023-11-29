#!/bin/sh -x

node /app/build/server.js

exec "$@"