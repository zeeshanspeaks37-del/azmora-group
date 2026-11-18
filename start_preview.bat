@echo off
echo ========================================================
echo   AZMORA GROUP - Premium Dark Luxury Website Preview
echo ========================================================
echo.
echo Launching local server on http://localhost:3000 ...
echo Press Ctrl+C in this window to stop the server anytime.
echo.
start http://localhost:3000
python -m http.server 3000
