#!/bin/bash
cd "$(dirname "$0")"
SCRIPT_NAME=$(basename "$0" | sed 's/\..*$//')
node $SCRIPT_NAME.js
