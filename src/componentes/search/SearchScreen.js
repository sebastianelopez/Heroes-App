import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from "query-string";
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';




export const SearchScreen = ({history}) => {    

    const location= useLocation();
    const {q = ''}=queryString.parse(location.search);

    const [ formValues, handleInputChange] = useForm({searchText:q});
    const {searchText}=formValues;

    const heroesFiltered= useMemo(() => getHeroesByName(q), [q]);
    

    const handleSearch = (e)=>{
        e.preventDefault();        
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Buscar</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Encuentra a tu heroe</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Ingresa el nombre del heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-danger mt-3"
                            >
                            Buscar
                        </button>
                    </form>                      
                </div>

                <div className="col-7">
                    <h4>Resultado</h4>
                    <hr />

                    {
                        (q === '') 
                            &&
                                <div className="alert alert-info">
                                    Busca un heroe...
                                </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) 
                            &&
                                <div className="alert alert-danger">
                                    No existe un heroe llamado {q}
                                </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
