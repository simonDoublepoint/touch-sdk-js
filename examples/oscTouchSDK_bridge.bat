@echo off
cd "%~dp0"
set SCRIPT_NAME=%~n0
node %SCRIPT_NAME%.js
pause