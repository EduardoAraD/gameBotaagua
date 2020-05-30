import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native'
import screnFundo from '../../assets/imgs/fundo.jpg'
import Jogador from '../dados/player'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    text:{
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#f7f7f7'
    },
    img:{
        height: 100,
        width: 100,
        margin: 30,
        resizeMode: 'contain',
        textAlign: 'right',
        textAlignVertical: 'bottom',
    }
})

/*async function saveItem(name, sigla, escudo) {
    const myUser = {
        name: name,
        escudo: escudo,
        sigla: sigla,
    }
    await storage.set('user', myUser);
}*/

function getPreparacao(props){
    //console.log(Jogador)
    var name = props.navigation.state.params.name
    var sigla = props.navigation.state.params.sigla
    var escudo = props.navigation.state.params.escudo

    //saveItem(name,sigla, escudo)

    //console.log(props.navigation.state.params)
    //console.log(name,sigla,escudo)
    props.navigation.navigate('Inicio',props.navigation.state.params)
}

export default props => {//class Loading extends Component {
    //render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={screnFundo} style={styles.imageBackground}>
                    <Text style={styles.text}>Carregando Dados...</Text>
                    
                    {getPreparacao(props)}
                </ImageBackground>
            </View>
        )
    //}
}