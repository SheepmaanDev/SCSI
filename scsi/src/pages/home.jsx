import Header from '../components/header/header'
import Accueil from '../components/accueil/accueil'

import './home.sass'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Accueil />
        </div>
    )
}

export default Home