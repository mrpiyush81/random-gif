import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function useGif(tag) {
     const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

     const [gif, setgif] = useState("");
     const [spinn, setspinn] = useState(false);

     async function fachData(tag) {
          setspinn(true);
          const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
          const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
          const { data } = await axios.get(tag ? tagurl : url);
          console.log(data);
          if(data.data.length===0){
              var imagepath =  'https://media1.giphy.com/media/rQT2NKPxIRWlqmoqVt/giphy.gif?cid=47c83ccboih2mjznn7k4bav5cmvwr51g7kkr2zcyg4ots68d&ep=v1_gifs_random&rid=giphy.gif&ct=g'
        
          }
          else{
              var imagepath = data.data.images.downsized_large.url;
          }
          console.log(imagepath);
          setgif(imagepath);
          setspinn(false);
     }

     useEffect(() => {
          fachData();
     }, []);

     return { gif, spinn,fachData };
}

export default useGif;
