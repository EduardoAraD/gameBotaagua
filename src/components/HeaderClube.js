import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '15%',
        width: '100%',
        backgroundColor: '#993333',
        display: 'flex',
        flexDirection: 'row',
    },
    escudoImg: {
        display: 'flex',
        flex: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode:'contain',
        margin: 10,
    },
    dadosView: {
        display: 'flex',
        flex: 7,
        justifyContent: 'space-around'
    },
    textTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFF'
    },
    textValor: {
        fontSize: 20,
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#339933',
        marginRight: 20,
    }
})

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

export default props => {
    
    return (
        <View style={styles.container}>
            <Image source={getEscudoImg(props.escudo)} style={styles.escudoImg} />
            <View style={styles.dadosView}>
            <Text style={styles.textTitle}>{props.name}</Text>
                <Text style={styles.textValor}>R$ 247.092.345</Text>
            </View>
        </View>
    )
}