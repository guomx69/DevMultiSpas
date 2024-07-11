
const getPostionAsync=()=>{ //console.log("Navigator.geolocation.getCurrentPosition is called!!",navigator.geolocation);
    if (navigator.geolocation) 
        {   console.log("Navigator.geolocation is available");
            return new Promise((resolve, reject) =>navigator.geolocation.getCurrentPosition(resolve, reject));
        }
        
        else
        {
            console.log("Navigator.geolocation is Not available");
            return new Promise((resolve, reject)=>reject({code:-99,message:"Geolocation is not supported by this browser."}));
        }
    //return new Promise((resolve, reject) =>navigator.geolocation.getCurrentPosition(resolve, reject));   
}

const getLatLng=async()=>{
    try{
     const pos=await getPostionAsync();
     const {coords}=pos;
     console.log("Position::",coords);
     return coords;

    }catch(err){

      console.log(`ERROR Code Is:${err.code}: ${err.message}, so use the default LatLng in the app setting`,"...please check it");
      return {latitude:29,longitude:-95};
    }
}

export default getLatLng
