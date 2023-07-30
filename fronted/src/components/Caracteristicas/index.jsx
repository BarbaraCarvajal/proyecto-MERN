import React from "react";
import { Link } from "react-router-dom";
import featureImg from "../../assets/images/feature-img.png";

const Caracteristicas = () => {
    return(
        <>
            <div className="container">
                <div className="flex items-center  justify-between flex-col lg:flex-row">
                    <div className="xl:w-[670px]">
                        <h2 className="heading">
                            Obtenga una asesoría virtual
                        </h2>
                        <ul className="pl-4">
                            <li className="text__para">
                                1. Contrato directo con desarrolladores
                            </li>
                            <li className="text__para">
                                2. Encuentra recursos con valores y personalidad
                            </li>
                            <li className="text__para">
                                3. Si no estas conforme con el recurso, te lo cambiamos sin costos adicionales
                            </li>
                        </ul>
                        <Link to="/">
                            <button className="btn">Ver más</button>
                        </Link>

                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={featureImg} className= "w-3/4" alt="" />
                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                            Lun, 21
                                        </p>
                                        <p className="text-[10px] leading-[10] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                            11:30
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Caracteristicas;