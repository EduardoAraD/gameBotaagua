function getEscudoImg(nome){
    switch(nome) {
        case 'botaagua': return require('../../assets/escudos/br/botaagua.png')
        case 'caucaia': return require('../../assets/escudos/br/caucaia.png')
        case 'ceara': return require('../../assets/escudos/br/ceara.png')
        case 'csa': return require('../../assets/escudos/br/csa.png')
        case 'caxias': return require('../../assets/escudos/br/caxias.png')
        case 'ferroviario': return require('../../assets/escudos/br/ferroviario.png')
        case 'fortaleza': return require('../../assets/escudos/br/fortaleza.png')
        case 'flamengo': return require('../../assets/escudos/br/flamengo.png')

        default: return require('../../assets/escudos/br/caucaia.png')
    }
}

export default getEscudoImg()