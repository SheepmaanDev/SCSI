import Fond from '../../assets/FondAcceuil.png'

import './accueil.sass'

const Accueil = () => {
    return (
        <section className='accueil'>
            <img className='accueil__img' src={Fond} alt="" />
            <div className='accueil__container'>
                <div className='accueil__container__overlay'>
                    <h2 className='accueil__container__overlay__title'>Vous conseiller est notre métier</h2>
                    <p className='accueil__container__overlay__para'>S’adressant autant aux particuliers qu’aux entreprises, nous gérons de nombreuses PE-TPE en Isère (notamment dans le Vercors), ainsi que des institutionnels (mairies, communautés de communes), mais aussi des artisans, professions libérales…</p>
                    <p className='accueil__container__overlay__para'>Nous intervenons rapidement sur toutes les villes du bassin Grenoblois. Contrôles distants et téléassistances nous permettent d’accompagner de nombreuses entreprises et particuliers en france et à l’étranger.</p>
                    <a className='accueil__container__overlay__link' href='#'>En savoir plus ..</a>
                </div>
            </div>
        </section>
    )
}

export default Accueil