import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';
//THIS is custom hook
const useVideos = ({defaultSearchTerm}) =>{
    const [videos, setVideos] = useState([]);

    useEffect((defaultSearchTerm) => {
        search(defaultSearchTerm);
    },[]);
    
    const search = async (term) => {
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        setVideos(response.data.items);
    };

    return([videos , search]);
}
export default useVideos;