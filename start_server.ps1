$ErrorActionPreference = 'Stop'
# Start Flask dev server for Trump Website on 0.0.0.0:8081 using venv Python
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$python = Join-Path $root '.venv\Scripts\python.exe'
Write-Host "Using Python: $python"
& $python server.py --host 0.0.0.0 --port 8081