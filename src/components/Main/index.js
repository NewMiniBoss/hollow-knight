import Cards from '../ComponentsMain/Cards';
import Trailer from '../ComponentsMain/Trailer'
import DLCs from '../ComponentsMain/DLCs';

const Main = () => {
    return (
        <main>
            <h1>Desça ao Escuro</h1>
            <Cards
                row='row'
                img='https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/mines.jpg?format=1000w' h2='Desbrave as profundezas de um reino esquecido'
                p='Sob a cidade desbotada de Dirtmouth dorme um vasto e antigo reino. Muitos são atraídos sob a superfície, em busca de riquezas, ou glória, ou respostas para velhos segredos.' p2='Como o enigmático Cavaleiro, você atravessará as profundezas, desvendará seus mistérios e conquistará seus males.'
            />

            <Cards
                row='row-reverse'
                img='https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763465032-T3M2QQ4KMOTWS3EW7FC8/false_knight.jpg?format=1000w'
                h2='Use suas habilidades e reflexos para sobreviver' p='Hollow Knight é uma desafiadora aventura de ação 2D. Você explorará cavernas sinuosas, lutará contra criaturas contaminadas e escapará de armadilhas intrincadas, tudo para resolver um antigo mistério há muito escondido.'
                p2='- Explore mundos vastos e interconectados'
                p3='- Encontre uma coleção bizarra de amigos e inimigos'
                p4='- Evolua com novas e poderosas competências e habilidades'
            />

            <Cards
                row='row'
                img='https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763599729-KB821M5EQA818FABUXO3/lake_of_unn.jpg?format=1000w'
                h2='Arte evocativa desenhada à mão'
                p='O mundo de Hollow Knight é trazido à vida em detalhes vívidos e mal-humorados, suas cavernas vivas com criaturas bizarras e aterrorizantes, cada uma animada à mão em um estilo 2D tradicional.'
                p2='Cada nova área que você descobrirá é lindamente única e estranha, repleta de novas criaturas e personagens para descobrir. O mundo de Hollow Knight vale a pena explorar apenas para apreciar as vistas e descobrir novas maravilhas escondidas fora do caminho batido.'
            />
            <Trailer />
            <h1>Hollow Knight se expande com 4 pacotes gigantes de conteúdo</h1>
            <DLCs />
        </main>
    )
}

export default Main