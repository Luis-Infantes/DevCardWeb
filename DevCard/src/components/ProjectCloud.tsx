import { useState } from "react";
import type { ProjectCloudProps, ProjectProps } from "../types/types";
import { TurboPointProject } from "./projects/TurboPointProject";
import { DevCardProject } from "./projects/DevCardProject";
import { Impresion3DProject } from "./projects/Impresion3DProject";
import { BluePayProject } from "./projects/BluePayProject";


export const ProjectCloud: React.FC<ProjectCloudProps> = ({ projectscloud }) => {

    const [_open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    return (

        <div className="container">

            <div className="projects-grid">
                <div className="card-project"><DevCardProject projectscloud={projectscloud} /></div>
                <div className="card-project"><BluePayProject projectscloud={projectscloud} /></div>
                <div className="card-project"><Impresion3DProject projectscloud={projectscloud} /></div>
            </div>

        </div>

    )
}