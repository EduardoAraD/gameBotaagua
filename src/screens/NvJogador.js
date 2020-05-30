import React, { Component } from 'react'
import { StyleSheet, View,ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native'
import screnFundo from '../../assets/imgs/fundo.jpg'
import HeaderClube from '../components/HeaderClube'
import ItemIncrement from '../components/ItemIncrement'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    areaContent: {
        margin: 10,
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fcfcfc',
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

export default class NvJogador extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <HeaderClube name='Caucaia EC' escudo='caucaia' />
                    <ScrollView>
                        <View style={styles.areaContent}>
                            <Text style={styles.title}>Treino dos Jogadores</Text>
                            <Text style={styles.title}>36</Text>
                            <ItemIncrement title='Técnica' />
                            <ItemIncrement title='Físico'/>
                            <ItemIncrement title='Velocidade'/>
                            <ItemIncrement title='Tática'/>
                            <ItemIncrement title='Cooperatividade'/>
                            <View style={{display:'flex', marginTop:30, alignItems:'center'}}>
                                <TouchableOpacity style={styles.buttonProps} 
                                    onPress={ () => { this.props.navigation.goBack()}}>
                                    <Text style={styles.textButton}>Voltar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}