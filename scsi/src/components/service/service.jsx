import { ServicesList } from '../../data/services'

import './service.sass'

const Service = () => {
    return (
        <section className='service' id='service'>
            <h2 className='service__title'>Nos Services</h2>
            <div className='service__container'>
                {ServicesList.map((e, index) => (
                    <div key={index} className='service__container__card'>
                        <img className='service__container__card__img' src={e.img} alt={e.title} />
                        <div className='service__container__card__txt'>
                            <h3 className='service__container__card__txt__title'>{e.title}</h3>
                            <p className='service__container__card__txt__description'>{e.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Service