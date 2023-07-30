import React from "react";
import ServiceList from "./ServiceList";

const Servicios = () => {
    return (
        <>
            <section>
                <div className="conainer">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Nuestros servicios de reclutamiento
                        </h2>
                        <p className="text__para text-center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi, possimus minus beatae vel architecto, ipsa, quas facilis explicabo accusantium illum sed recusandae temporibus quae sint numquam aspernatur doloremque necessitatibus!
                        </p>
                    </div>
                    <ServiceList/>
                </div>
            </section>

        </>
    )
}

export default Servicios;