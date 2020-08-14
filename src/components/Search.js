import React from 'react';

const Search = (props) => {
   const {getSongs} = props;

    
    //const [song, getSongs] = useState('');
    //const [artist, getSongs] = useState(''); 
    //const {getArtists} = props;

    const handlerEvent = (evento) => {
        console.log('soy un evento', evento.target.value);
        getSongs(evento.target.value);
    }



    
   
    return (
    <div className="container">
        <div className="input-group mb-12 mt-4">
            <input type="text" onChange={handlerEvent} className="form-control" placeholder="Escribe el título de una canción" aria-label="Song Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Buscar canción</span>
                </div>
        </div>

        <div className="input-group mb-12 mt-4">
            <input type="text" className="form-control" placeholder={getSongs.artist} aria-label="Song Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Buscar artista</span>
                </div>
        </div>
    
        <div className="input-group mb-12 mt-4">
            <button type="button" className="btn btn-outline-success btn-lg btn-block">Buscar</button>

        </div>
        
    </div>
    )
}

export default Search;
