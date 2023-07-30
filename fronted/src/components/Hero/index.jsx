import React from 'react'
import heroImg1 from '../../assets/images/hero-img01.png'
import heroImg2 from '../../assets/images/hero-img02.png'
import heroImg3 from '../../assets/images/hero-img03.png'


const Hero = () => {
    return (
        <>
            {/* Hero section*/}
            <section className='hero__section pt-[60px] 2xl:h-[800px]'>
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justifity-between">
                        {/* Hero Content */}
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[600] md:leading-[70px]'>
                                    Encuentra un <span className=' bg-yellowColor rounded-full text-white p-1'>desarrollador(a)</span> en minutos fácil y rápido.
                                </h1>
                                <p className='text__para'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis architecto nam adipisci quae odit repellat perspiciatis veniam, reiciendis, quibusdam error, officiis cum? Delectus tempore provident, obcaecati optio voluptates nulla?
                                </p>
                                <button className='btn'>
                                    Solicita un reclutador
                                </button>
                            </div>

                            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                        700+
                                    </h2>
                                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'>
                                        Desarrolladores
                                    </p>
                                </div>

                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                        100%
                                    </h2>
                                    <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'>
                                        Clientes Satisfechos
                                    </p>
                                </div>

                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                        13+
                                    </h2>
                                    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'>
                                        Años de experiencia
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='flex gap-[30px] justify-end'>
                            <div>
                                <img className='w-full' src={heroImg1} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <img className='w-full mb-[30px]' src={heroImg2} alt="" />
                                <img className='w-full' src={heroImg3} alt="" />
                            </div>

                        </div>


                    </div>
                </div>
            </section>
            {/* End Hero section*/}
        </>
    )
}

export default Hero 