import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'
import FerroviarioImg from '../../assets/escudos/br/ferroviario.png'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3e3e3e',
        display: 'flex',
        height: 35,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textPos: {
        color: '#f7f7f7',
        width: 30,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold'
    },
    img: {
        marginRight: 5,
        marginLeft: 5,
        height: 30,
        width: 30,
        alignSelf: 'center',
        resizeMode:'contain',
    },
    areaValor: {
        display: 'flex',
        flexDirection: 'column',
        height: 35,
        width: '100%',
    },
    textNome: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f7f7f7',
    },
    areaText: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textValor: {
        width: 20,
        textAlign: 'center',
        fontSize: 12,
        color: '#f7f7f7'
    }
})

function getClube(nome){
    switch(nome) {
        case "caucaia": return require('../../assets/escudos/br/caucaia.png')
        case "ceara": return require('../../assets/escudos/br/ceara.png')
        case "csa": return require('../../assets/escudos/br/csa.png')
        case "caxias": return require('../../assets/escudos/br/caxias.png')
        case "ferroviario": return require('../../assets/escudos/br/ferroviario.png')

        default: return require('../../assets/escudos/br/caucaia.png')
    }
}

function getPorcetage(j, pt) {
    return 100 * ( pt / ( j * 3 ))
}

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textPos}>{props.pos + 1 || 0}</Text>
            <Image style={styles.img} source={getClube(props.escudo)} />
            <View style={styles.areaValor}>
                <Text style={styles.textNome}>{props.name || 'not clube'}</Text>
                <View style={styles.areaText}>
                    <Text style={styles.textValor}>{props.pt || 0}</Text>
                    <Text style={styles.textValor}>{props.j || 0}</Text>
                    <Text style={styles.textValor}>{props.v || 0}</Text>
                    <Text style={styles.textValor}>{props.e || 0}</Text>
                    <Text style={styles.textValor}>{(props.j -(props.v + props.e)) || 0}</Text>
                    <Text style={styles.textValor}>{(props.gf - props.gs) || 0}</Text>
                    <Text style={styles.textValor}>{props.gf || 0}</Text>
                    <Text style={styles.textValor}>{props.gs || 0}</Text>
                    <Text style={[styles.textValor, {width: 30, marginRight: 10}]}>{getPorcetage(props.j, props.pt) || 0}</Text>
                </View>
            </View>
        </View>
    )
}