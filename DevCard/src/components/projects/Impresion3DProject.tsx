import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import type {ProjectCloud, ProjectCloudProps } from "../../types/types";


export const Impresion3DProject: React.FC<ProjectCloudProps> = ({ projectscloud }) => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)


    const impresion3dProject = projectscloud.filter(
        (p: ProjectCloud) => p.slug === "impresion3d"
    );


    return (

        <div className="container">

            <Button className="Project-Style" onClick={toggle}>
                <h4>3D Impresion</h4>
                <p>Inventory management and printing materials order application</p>
                <p className="text-info mb-2 fw-bold">Power Apps | Power Automate</p>
            </Button>


            <Modal
                isOpen={open}
                toggle={toggle}
                size="lg"
                className="myModal"
                modalClassName="myModal"
                contentClassName="myModalContent"
                wrapClassName="myModalBackdrop"
            >




                <ModalBody className="myModalBody">

                    <ul className="list-unstyled mb-0">
                        {impresion3dProject.map((p: ProjectCloud) => (

                            <li key={p.id} className="d-flex flex-column align-items-center mb-4 text-center">

                                <img
                                    src={`/image/${p.image}`}

                                    className="skill-icon"
                                    width={330}
                                    height={220}
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback si la imagen no existe
                                        (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                                    }}
                                />

                                {/* <strong className="fs-5">{p.title}</strong>*/}
                                <br />
                                <p className="mb-1">{p.description}</p>

                                {/* Si tech es un array, conviene unirlo con comas */}
                                <h6 className="text-primary mt-2 fw-bold">[Tech Stack]</h6>
                                <h6 className="text-primary mb-2 fw-bold">
                                    {Array.isArray(p.tech) ? p.tech.join(" / ") : p.tech}
                                </h6>

                                <div className="links-styles mt-4">
                                    <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-sm text-light btn-primary p-2 ">
                                        Repository
                                    </a>

                                    <a href={p.linkvideo} target="_blank" rel="noreferrer" className="btn btn-sm text-light btn-primary p-2 ms-4">
                                        Vídeo tutorial
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>

                </ModalBody>

                <ModalFooter className="myModalFooter d-flex justify-content-center">
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>

            </Modal>
        </div>

    )
}