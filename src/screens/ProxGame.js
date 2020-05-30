import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text } from 'react-native'
import screnFundo from '../../assets/imgs/fundo.jpg'
import CaucaiaImg from '../../assets/escudos/br/caucaia.png'
import CearaImg from '../../assets/escudos/br/ceara.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    areaContainer: {
        margin: 10,
        marginTop: 20,
    },
    textComp: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f7f7f7'
    },
    textFont2: {
        fontSize: 22,
        textAlign: 'center',
        color: '#f7f7f7'
    },
    img: {
        height: 180,
        width: 180,
        resizeMode: 'contain'
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

export default class ProxGame extends Component {

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <View style={styles.areaContainer}>
                        <Text style={styles.textComp}>Campeonato Brasileiro Série B</Text>
                        <Text style={styles.textFont2}>4° Rodada</Text>
                        <Image style={styles.img} source={CaucaiaImg} />
                        <Image style={[styles.img,{alignSelf:'flex-end'}]} source={CearaImg} />
                        <Text style={styles.textFont2}>Caucaia EC x Ceará SC</Text>
                        <View style={{display:'flex', marginTop:20, alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonProps} 
                                //onPress={ () => { this.props.navigation.navigate('JogoTempoReal') } }>
                                    onPress={ () => { this.props.navigation.navigate('JogoReal')}} >
                                <Text style={styles.textButton}>Iniciar Jogo</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{display:'flex', marginTop:20, alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonProps} 
                                onPress={ () => { this.props.navigation.goBack()}}>
                                <Text style={styles.textButton}>Voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}