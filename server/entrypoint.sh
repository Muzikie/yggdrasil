#!/bin/sh -x

node /server/build/server.js

exec "$@"