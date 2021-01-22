import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroeId}= useParams();

    const hero =getHeroesById(heroeId);

    if (!hero){
        return <Redirect to='./' />
    }

    const {    
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters} = hero;

    const handleReturn = ()=> {
        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
        
    }
    
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <img src={`../assets/imagenes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail" />
                </div>
                <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"> <b>Primera aparicion: </b>{first_appearance}</li>
                    <li className="list-group-item"> <b>Personajes: </b>{characters}</li>
                </ul>

                <button 
                className="btn btn-outline-danger mt-5"
                onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
            </div>

            
            
        </>
    )
}
