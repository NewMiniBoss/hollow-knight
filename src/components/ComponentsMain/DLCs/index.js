import CardDLCs from "../ComponentsDLCs"
import blue from '../../../assets/blue.png';
import gold from '../../../assets/gold.png';
import dream from '../../../assets/dreams.png';
import grim from '../../../assets/grim.png';

const DLCs = () => {
    return (
        <section className="dlc-card">
            <CardDLCs
                h3='Sonhos Escondidos'
                img={dream}
                p='Novos inimigos poderosos surgem! New Boss luta. Novas atualizações. Música Nova.'
            />
            <CardDLCs
                h3='A Trupe Grimm'
                img={grim}
                p='Acenda a Lanterna do Pesadelo. Invoque a Trupe. Nova Missão Principal. Novas Lutas contra Chefes. Novos encantos. Novos inimigos. Novos amigos.'
            />
            <CardDLCs
                h3='Sangue vital'
                img={blue}
                p='Um Reino Atualizado! Novo chefe. Chefes atualizados. Ajustes e refinamentos em todo o jogo.'
            />
            <CardDLCs
                h3='Mestre dos Deuses'
                img={gold}
                p='Tome o seu lugar entre os Deuses. Novos Personagens e Quest. Novas Lutas contra Chefes. Música nova épica!'
            />
        </section>
    )
}

export default DLCs