import React from "react";
import aboutimg from '../../assets/images/about.png'
import aboutimgcard from '../../assets/images/about-card.png'
import { Link } from "react-router-dom";

const About = () => {
    return(
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    {/*Imagenes*/}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutimg} alt="" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                            <img src={aboutimgcard} alt="" />
                        </div>
                    </div>
                    {/*Texto*/}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">Déjanos tus requerimientos</h2>
                        <p className="text__para">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium laboriosam molestiae repellendus doloribus nobis porro eum omnis rerum dolorem magni minus deleniti assumenda, impedit deserunt. Error nesciunt non cum blanditiis?
                        </p>
                        <p className="text__para mt-[30px]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium laboriosam molestiae repellendus doloribus nobis porro eum omnis rerum dolorem magni minus deleniti assumenda, impedit deserunt. Error nesciunt non cum blanditiis?
                        </p>
                        <Link  to="/">
                            <button className="btn">
                                Conocer más
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;