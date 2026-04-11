import { useState } from "react";
import type { ProjectPrimerProps, ProjectProps } from "../types/types";
import { TurboPointProject } from "./projects/TurboPointProject";
import { DevCardProject } from "./projects/DevCardProject";
import { CromePlayProject } from "./projects/CromePlayProject";
import { SocialHomeProject } from "./projects/SocialHomeProject";
import { Impresion3DProject } from "./projects/Impresion3DProject";
import { BitSchoolProject } from "./projects/BitSchoolProject";
import { BluePayProject } from "./projects/BluePayProject";
import { PopularGroupsProject } from "./projects/PopularGroupsProject";



export const ProjectPrimer: React.FC<ProjectPrimerProps> = ({ projectsprimer }) => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    return (

        <div className="container">

            <div className="projects-grid">

                <div className="card-project"><PopularGroupsProject projectsprimer={projectsprimer} /></div>
                <div className="card-project"><SocialHomeProject projectsprimer={projectsprimer} /></div>

            </div>

        </div>

    )
}