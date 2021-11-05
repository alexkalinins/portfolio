import React from 'react'
import { thumbnails } from '../data/projects/thumbnails.ts';
import { v4 as uuid } from "uuid";
import ProjectThumbnail from "./ProjectThumbnail"


export default function ProjectList() {
    return (
        <div className="projectList">
            {thumbnails.map(thumbnail => (
                <ProjectThumbnail key={uuid()} data={thumbnail} />
            ))}
        </div>
    )
}
