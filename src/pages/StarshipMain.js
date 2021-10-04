import React from 'react'
import StarshipList from '../components/StarshipList'
import StarshipHeader from '../components/StarshipHeader'

export default function StarshipMain() {
    return (
        <React.Fragment>
            <StarshipHeader />
            <StarshipList />
        </React.Fragment>
    )
}
