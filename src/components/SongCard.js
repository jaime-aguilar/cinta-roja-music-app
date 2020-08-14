import React from 'react';
import pt from '../containers/postTrack';

const SongCard = (props) => {
    //const {pt} = props;
    const {id,song,artist,similarity} = props;
    

    //PENDIENTE AGREGARLE DURACIÓN Y ALGUNA IMÁGEN


    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{song}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{artist}</h6>
                <p className="card-text">Similarity: {similarity}</p>
                <button onClick={ () => {pt(song,artist,similarity)} } className="btn btn-primary">Agregar</button>

                
            </div>
        </div>
    )
}

export default SongCard;
