rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" && 
git branch -M main &&
git remote add origin git@github.com:xiaoxue423/vue3-wheel.git &&
git push -f -u origin main &&
cd -
echo https://xiaoxue423.github.io/vue3-wheel/index.html