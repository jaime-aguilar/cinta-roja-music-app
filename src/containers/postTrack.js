import React from 'react'
import axios from 'axios';


const postTrack = () => {

    const pt = (cancion,artista,similar) => {
        const URL = 'https://music-test-b43.firebaseio.com';
        let newTrack = {song:cancion, artist:artista, similarity:similar};
        axios.post(URL,newTrack)
            .then(res => console.log('OK'))
            .catch(error => console.log('error'));    
    }
    return (
        <React.Fragment>
            <main className="main">
                <div className="container pt-4">
                    <postTrack pt= {pt} />
                </div>
            </main>
        </React.Fragment>
    )
}

export default postTrack
