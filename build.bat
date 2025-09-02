@echo off
echo Building Portfolio for GitHub Pages...
echo.

echo Installing dependencies...
npm install

echo.
echo Building the project...
npm run build

echo.
echo Build completed! Check the 'dist' folder for your built files.
echo.
echo To deploy to GitHub Pages:
echo 1. Push your code to GitHub
echo 2. Go to repository Settings > Pages
echo 3. Set source to 'Deploy from a branch'
echo 4. Select 'main' branch and '/docs' folder
echo 5. Copy contents of 'dist' folder to 'docs' folder
echo.
pause
