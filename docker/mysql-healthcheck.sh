#!/bin/bash

mysql -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" --silent -e"use $MYSQL_DATABASE"
