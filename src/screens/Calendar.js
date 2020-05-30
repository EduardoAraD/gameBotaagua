import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'

import screnFundo from '../../assets/imgs/fundo.jpg'
import HeaderClube from '../components/HeaderClube'
import Jogo from '../components/Jogo'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fcfcfc',
        marginTop: 20,
        marginBottom: 15
    },
    imageBackground: {
        flex: 1,
    },
    jogo: {
        margin: 5,
    },
    buttonProps: {
        backgroundColor: '#343434',
        borderRadius: 10,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fcfcfc',
    }
})

export default class Calendar extends Component {
    state = {
        jogos:[
            {casa: "Caucaia EC", siglaCasa: "caucaia", golCasa: 3, golFora: 2, siglaFora: "ceara", fora: "Ceara SC"},
            {casa: "Caucaia EC", siglaCasa: "caucaia", golCasa: 2, golFora: 0, siglaFora: "caxias", fora: "Caxias do Sul"},
            {casa: "CSA", siglaCasa: "csa", golCasa: "", golFora: "", siglaFora: "caucaia", fora: "Caucaia EC"}
        ]
    }
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <HeaderClube name='Caucaia EC' escudo='caucaia' />
                    <Text style={styles.title}>Calendário da Temporada</Text>
                    <ScrollView style={{margin: 10}}>
                        { this.state.jogos.map((jogo, index) => {
                           return  <Jogo key={index}
                                        casa={jogo.casa}
                                        siglaCasa={jogo.siglaCasa}
                                        golCasa={jogo.golCasa}
                                        golFora={jogo.golFora}
                                        siglaFora={jogo.siglaFora}
                                        fora={jogo.fora} />
                        }) }
                        <View style={{display:'flex', padding:20, alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonProps} 
                                onPress={ () => { this.props.navigation.goBack()}}>
                                <Text style={styles.textButton}>Voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}