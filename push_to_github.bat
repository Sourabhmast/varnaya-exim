@echo off
"C:\Program Files\Git\cmd\git.exe" remote remove origin
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/Sourabhmast/varnaya-exim.git
"C:\Program Files\Git\cmd\git.exe" branch -M main
echo Pushing to GitHub... This may prompt you for credentials.
"C:\Program Files\Git\cmd\git.exe" push -u origin main --force
echo Done!
pause
