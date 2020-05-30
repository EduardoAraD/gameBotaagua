import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text, Dimensions } from 'react-native'
import screnFundo from '../../assets/imgs/fundo.jpg'
import gremioImage from '../../assets/imgs/gremio.jpg'
import caucaiaImage from '../../assets/escudos/br/caucaia.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //height: Dimensions.get('window').height
    },
    imageBackground: {
        flex: 1,
    },
    image: {
        display: 'flex',
        flex: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        height: '45%',
        width:'70%',
        resizeMode:'contain'
    },
    areaButton: {
        display: 'flex',
        flex: 1,
        alignItems: 'center'
    },
    buttonProps: {
        backgroundColor: '#343434',
        borderRadius: 10,
        width: '80%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fcfcfc',
    }
})

export default class Login extends Component {

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <Image source={caucaiaImage}
                        style={styles.image}>
                    </Image>
                    <View style={styles.areaButton}>
                        <TouchableOpacity style={styles.buttonProps} 
                            onPress={ () => { this.props.navigation.navigate('CreateClube')}}>
                            <Text style={styles.textButton}>Novo Jogo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonProps,{marginTop:20}]} 
                            onPress={ () => { this.props.navigation.navigate('Inicio')}}>
                            <Text style={styles.textButton}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

}
