import React from 'react'
import NavBar from '../components/NavBar'
import ProjectList from '../components/ProjectList';

export default function projects() {
    return (
        <div className="page">
            <main>
                <NavBar pageTitle="Projects" />
                
                <div className="pageContent">
                    <h1>Selected Projects</h1>
                    <ProjectList/>

                </div>

            </main>
        </div>
    )
}
