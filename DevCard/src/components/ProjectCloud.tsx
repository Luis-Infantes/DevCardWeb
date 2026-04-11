import { useState } from "react";
import type { ProjectCloudProps, ProjectProps } from "../types/types";
import { TurboPointProject } from "./projects/TurboPointProject";
import { DevCardProject } from "./projects/DevCardProject";
import { CromePlayProject } from "./projects/CromePlayProject";
import { SocialHomeProject } from "./projects/SocialHomeProject";
import { Impresion3DProject } from "./projects/Impresion3DProject";
import { BitSchoolProject } from "./projects/BitSchoolProject";
import { BluePayProject } from "./projects/BluePayProject";


export const ProjectCloud: React.FC<ProjectCloudProps> = ({ projectscloud }) => {

    const [open, setOpen] = useState(false);

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