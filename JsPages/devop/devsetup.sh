#!/bin/bash
#update isDev=true; in appconfig.js
approot=../src/libs/
SourceFile=${approot}appSetting.js
prodLine='const isDev=false;'
devLine='const isDev=true;'
sed -i "s/$prodLine/$devLine/"  $SourceFile

##########################
approot=../../WebAppB2c/Pages/
prodstartLine='@*proudction code start here\*@'
prodendLine='@*proudction code end here\*@'
devstartLine='@*development code start here\*@'
devendLine='@*development code end here\*@'
########
Pages_0=(${approot}Index.cshtml "<script type="module" src="http://localhost:8060/main/v1/main.js"></script>")
Pages_1=(${approot}Error.cshtml "<script type="module" src="http://localhost:8060/main/v1/login.js"></script>")
Pages_2=(${approot}Privacy.cshtml "<script type="module" src="http://localhost:8060/main/v1/admin.js"></script>")
MAIN_ARRAY=(
  Pages_0[@]
  Pages_1[@]
  Pages_2[@]
)
# Loop and print it.  Using offset and length to extract values
COUNT=${#MAIN_ARRAY[@]}
for ((i=0; i<$COUNT; i++))
do
  devView=${!MAIN_ARRAY[i]:0:1}
  devscript=${!MAIN_ARRAY[i]:1:1}
  echo "devscript ${devscript}"
  echo "devView ${devView}"

  sed -i "/$prodstartLine/,/$prodendLine/c $prodstartLine\n\n$prodendLine" $devView
  sed -i "/$devstartLine/,/$devendLine/c $devstartLine\n$devscript\n$devendLine" $devView

done





#cat $devView