import React from 'react'

const Home = () => {
    return (
        <>
            {/* Hero */}
            <section className='hero__section pt-[60px] 2xl:h-[800px]'>
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justifity-between">
                        {/* Hero Content */}
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[600] md:leading-[70px]'>
                                    Encuentra un desarrollador en minutos fácil y rápido.
                                </h1>
                                <p className='text__para'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis architecto nam adipisci quae odit repellat perspiciatis veniam, reiciendis, quibusdam error, officiis cum? Delectus tempore provident, obcaecati optio voluptates nulla?
                                </p>
                                <button className='btn'>
                                    Solicita un reclutador
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home