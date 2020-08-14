import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import SongCard from '../components/SongCard';
import axios from 'axios';

const MC = () => {

    const [songs, setSongs] = useState([]);
    //const [artists, setArtists] = useState([]);

    const getSongs = (song,artist) => {
     if(!song){
            song = 'Lithium';
            artist = 'Nirvana';
        }

    const URL = `http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=Nirvana&track=${song}&api_key=0a1c7a27330b86df828b678b8828f5b0&format=json&limit=4`;
    axios.get(URL)
        .then( respuesta => setSongs(respuesta.data.similartracks['track']) )
        //console.log(respuesta.data.similartracks) )
        //setSongs(respuesta.data.similartracks.track) )
        .catch( error => console.log(error)  );
    
    }
  useEffect( () => {
        //console.log('soy un useEffect');
        getSongs();
    }, []);

    return (
        <div>
            <Navbar />      
            <div className="container">
                <Search getSongs={getSongs} />     
            </div> 
            
           


            <div className="container">
                { 
                
                songs.map( song => {
                    
                    return (
                        <SongCard
                            
                            id={song.id}
                            song={song.name}
                            artist={song.artist.name}
                            similarity={Number.parseFloat(song.match).toFixed(2)}
                            
                            
                            //artist={song.artist}
                        />
                            )
                    
                         }) 
                }

                
                   

                 

            

            </div>
          
        </div>

    )

}

export default MC;
