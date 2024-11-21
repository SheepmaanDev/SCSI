import Header from '../components/header/header'
import Accueil from '../components/accueil/accueil'
import Service from '../components/service/service'

import './home.sass'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Accueil />
            <Service />
        </div>
    )
}

export default Home