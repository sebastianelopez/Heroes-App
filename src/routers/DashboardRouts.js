import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { DcScreen } from '../componentes/dc/DcScreen'
import { HeroScreen } from '../componentes/heroes/HeroScreen'
import { MarvelScreen } from '../componentes/marvel/MarvelScreen'
import { SearchScreen } from '../componentes/search/SearchScreen'
import { Navbar } from '../componentes/UI/NavBar'

export const DashboardRouts = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />
                    <Route exact path="/DC" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
