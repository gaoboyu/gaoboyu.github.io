copy C:\Users\gaobo\OneDrive\Vuepress\.vuepress\dist D:\Space\gaoboyu.github.io
copy C:\Users\gaobo\OneDrive\Vuepress\.vuepress\dist\assets D:\Space\Assets
D:
cd D:\Space\gaoboyu.github.io

git commit -m 'deploy'
git add .
git push origin master

cd D:\Space\Assets

git commit -m 'deploy'
git add .
git push origin master