#!/bin/bash
#update isDev=false; in appconfig.js
approot=../src/libs/
SourceFile=${approot}appSetting.js
prodLine='const isDev=false;'
devLine='const isDev=true;'
sed -i "s/$devLine/$prodLine/"  $SourceFile &&\

# start to build the js and css 
#npm run build 
#npm run build && npm run cleancp &&\  #for the first time deploy
# extract <script type="module" and <link rel="stylesheet" from /wwwroot/map/v1/index.html and insert them into the relevant files
appRoot=../../WebAppB2c
#rm -rf $approot/wwwroot/main/v1/* && cp -rf ../dist/* $approot/wwwroot/main/v1
appDest=$appRoot/Pages
appOrg=../dist
prodstartLine='@*proudction code start here\*@'
prodendLine='@*proudction code end here\*@'
devstartLine='@*development code start here\*@'
devendLine='@*development code end here\*@'

# prodMappingIndex=${approot}WebApp/wwwroot/map/v1/index.html
# prodMappingFinal=${approot}WebApp/Pages/Shared/_PartialMapGIS.cshtml

Pages_0=($appDest/Index.cshtml $appOrg/index.html)
Pages_1=($appDest/Error.cshtml $appOrg/pages/login.html)
Pages_2=($appDest/Privacy.cshtml $appOrg/pages/admin.html)
MAIN_ARRAY=(
  Pages_0[@]
  Pages_1[@]
  Pages_2[@]
)
# Loop and print it.  Using offset and length to extract values
COUNT=${#MAIN_ARRAY[@]}
for ((i=0; i<$COUNT; i++))
do
  pgDest=${!MAIN_ARRAY[i]:0:1}
  pgOrg=${!MAIN_ARRAY[i]:1:1}
  echo "pgDest ${pgDest}"
  echo "pgOrg ${pgOrg}"
  javascriptLine=$(grep '<script type="module"' $pgOrg)
  echo $javascriptLine
  modulepreload=$(grep '<link rel="modulepreload"' $pgOrg)
  echo $modulepreload
  cssLines=$(grep '<link rel="stylesheet"' $pgOrg)
  echo $cssLines
  sed -i "/$prodstartLine/,/$prodendLine/c $prodstartLine\n$javascriptLine\n$modulepreload\n$cssLines\n$prodendLine" $pgDest
  sed -i "/$devstartLine/,/$devendLine/c $devstartLine\n\n$devendLine" $pgDest
done


# #cat $prodMappingIndex





#cat $prodMappingFinal