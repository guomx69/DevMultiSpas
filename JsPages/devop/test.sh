#!/bin/bash
Pages_0=(${approot}WebApp/Pages/Index.cshtml "<script type="module" src="http://localhost:8060/main/v1/main.js"></script>")
Pages_1=(${approot}WebApp/Pages/Error.cshtml "<script type="module" src="http://localhost:8060/main/v1/login.js"></script>")
Pages_2=(${approot}WebApp/Pages/Privacy.cshtml "<script type="module" src="http://localhost:8060/main/v1/admin.js"></script>")
MAIN_ARRAY=(
  Pages_0[@]
  Pages_1[@]
  Pages_2[@]
)

# Loop and print it.  Using offset and length to extract values
COUNT=${#MAIN_ARRAY[@]}
for ((i=0; i<$COUNT; i++))
do
  devscript=${!MAIN_ARRAY[i]:0:1}
  devView=${!MAIN_ARRAY[i]:1:1}
  echo "devscript ${devscript}"
  echo "devView ${devView}"



  
done