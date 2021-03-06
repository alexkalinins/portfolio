import React from 'react'
import { thumbnails } from '../data/projects/thumbnails.js';
import { v4 as uuid } from "uuid";
import ProjectThumbnail from "./ProjectThumbnail"


export default function ProjectList() {
    return (
        <div className="z-10 flex flex-col items-start justify-center space-y-6">
            {thumbnails.map(thumbnail => (
                <ProjectThumbnail key={uuid()} data={thumbnail} />
            ))}
        </div>
    )
}
