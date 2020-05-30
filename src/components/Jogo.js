import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Clubes from '../dados/clubesJSON.js'
import CaucaiaImg from '../../assets/escudos/br/caucaia.png'
import CearaImg from '../../assets/escudos/br/ceara.png'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e3e3e3',
        display: 'flex',
        height: 35,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    img: {
        flex: 1,
        height: 30,
        width: 30,
        alignSelf: 'center',
        resizeMode:'contain',
    },
    textNome: {
        flex: 4,
        textAlign: 'center',
        fontSize: 18,
    },
    textPlacar: {
        flex: 2,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5,
    }
})


export default class Jogo extends Component {

    state = {
        casa: this.props.casa,
        escudoCasa: this.props.siglaCasa,
        golCasa: this.props.golCasa,
        golFora: this.props.golFora,
        escudoFora: this.props.siglaFora,
        fora: this.props.fora,
    }

    getClube(nome){
        switch(nome) {
            case "caucaia": return require('../../assets/escudos/br/caucaia.png')
            case "ceara": return require('../../assets/escudos/br/ceara.png')
            case "csa": return require('../../assets/escudos/br/csa.png')
            case "caxias": return require('../../assets/escudos/br/caxias.png')
            case "ferroviario": return require('../../assets/escudos/br/ferroviario.png')

            default: return require('../../assets/escudos/br/caucaia.png')
        }
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textNome}>{this.state.casa}</Text>
                <Image style={styles.img} source={this.getClube(this.state.escudoCasa)} />
                <Text style={styles.textPlacar}>{this.state.golCasa} - {this.state.golFora}</Text>
                <Image style={styles.img} source={this.getClube(this.state.escudoFora)} />
                <Text style={styles.textNome}>{this.state.fora}</Text>
            </View>
        )
    }
}