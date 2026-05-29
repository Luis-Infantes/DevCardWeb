import * as React from "react";
import type { IntroProps } from "../types/types";
import { Envelope, Github, Linkedin } from "react-bootstrap-icons";



export const IntroCard: React.FC<IntroProps> = ({ data }) => {

    return (

        <div>


            <div className="introcard-grid-info">
                <img
                    src={`/image/${data.avatarimg}`}
                    alt={`Logo de ${data.avatarimg}`}
                    className="skill-icon"
                    width={180}
                    height={180}
                    loading="lazy"
                    onError={(e) => {
                        // Fallback si la imagen no existe
                        (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                    }}
                />


                <h1>{data.fullname}</h1>
                <h2 className="h5">{data.title}</h2>
                <p>{data.description}</p>

                <div className="Intro-Style">
                    <a href="https://learn.microsoft.com/es-es/users/luisinfanteslacal-7036/credentials/e182d2f15d51e9ff?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" >

                        <img
                            src={`/image/${data.image}`}
                            alt={`Logo de ${data.image}`}
                            className="skill-icon"
                            width={80}
                            height={80}
                            loading="lazy"
                            onError={(e) => {
                                // Fallback si la imagen no existe
                                (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                            }}
                        />

                    </a>


                    <a href="https://www.credly.com/badges/6172789c-d8ea-4e13-b1b3-ae63a87b19bf/public_url" target="_blank" rel="noopener noreferrer" >

                        <img
                            src={`/image/${data.awsCertification}`}
                            alt={`Logo de ${data.awsCertification}`}
                            className="skill-icon"
                            width={80}
                            height={80}
                            loading="lazy"
                            onError={(e) => {
                                // Fallback si la imagen no existe
                                (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                            }}
                        />

                    </a>


                    <a href="https://learn.microsoft.com/api/credentials/share/es-es/LuisInfantesLacal-7036/912029C9B430FAB?sharingId=BD8D51D6F5F5B864" target="_blank" rel="noopener noreferrer" >

                        <img
                            src={`/image/${data.azureCertification}`}
                            alt={`Logo de ${data.azureCertification}`}
                            className="skill-icon"
                            width={80}
                            height={80}
                            loading="lazy"
                            onError={(e) => {
                                // Fallback si la imagen no existe
                                (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                            }}
                        />

                    </a>




                </div>
            </div>




            <div className="introcard-grid-redes" >


                <div className=" Intro-Style d-flex align-items-center justify-content-center gap-2">

                    <a href="https://www.linkedin.com/in/luis-infantes-artdesign/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={30} color="#35648f" />
                    </a>
                    <p className="mb-0 ">{data.linkedin}</p>
                </div>
               
                <div className=" Intro-Style d-flex align-items-center justify-content-center gap-2">

                    <a href="https://github.com/Luis-Infantes" target="_blank" rel="noopener noreferrer">
                        <Github size={30} color="#35648f" />
                    </a>
                    <p className="mb-0">{data.github}</p>
                </div>

                <div className=" Intro-Style d-flex align-items-center justify-content-center gap-2">
                    <Envelope size={30} color="#35648f" />
                    <p className="mb-0">{data.email}</p>
                </div>


            </div>

            
        </div>
    );
}