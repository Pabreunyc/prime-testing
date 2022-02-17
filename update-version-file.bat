@ECHO OFF
SET outfile=./src/assets/version.txt

ECHO "Running postbuild script..."
echo Output file is %outfile%

echo Built on: %date% %time% >%outfile%

:: git rev-parse HEAD >> %outfile%
ECHO Commit::%npm_package_gitHead% >>%outfile%
ECHO ---------------------------------------- >>%outfile%
ng --version >>%outfile%