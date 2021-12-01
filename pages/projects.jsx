import React from 'react'
import NavBar from '../components/NavBar'
import ProjectList from '../components/ProjectList';
import Head from '../components/Head';

export default function projects() {
    return (
        <div className="page">
            <Head pageTitle="Projects" />
            <main>
                <NavBar pageTitle="Projects" />

                <div className="pageContent">
                    <h1>Selected Projects</h1>
                    <ProjectList />

                </div>

            </main>
        </div>
    )
}
