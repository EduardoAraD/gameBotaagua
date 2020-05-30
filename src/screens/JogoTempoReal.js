import React,{ Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
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
    areaContent: {
        margin: 10,
        marginTop: 20,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f7f7f7'
    },
    img: {
        margin: 20,
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    placar: {
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        width: '90%',
        height: 'auto',
        backgroundColor: '#3e3e3e',
        color: '#f7f7f7',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    tempoReal: {
        height: 300,
        width: '90%',
        backgroundColor: '#e3e3e3',
        alignSelf: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    buttonProps: {
        backgroundColor: '#343434',
        borderRadius: 10,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fcfcfc',
    }
})

export default class JogoReal extends Component {

    state = {
        capacidadeTime1: 64,
        capacidadeTime2: 50,
        forcaCasa: 25,
        forcaFora: 30,
        golPro: 0,
        golContra: 0
    }
    getResultado(){
            let golC = 0
            let golF = 0
            let i = 0
            let qualidadeT1 = this.state.capacidadeTime1 * (1 + this.state.forcaCasa)
            let qualidadeT2 = this.state.capacidadeTime2 * (1 + this.state.forcaFora)
            for(i = 0; i < 10; i++ ){
                if(Math.floor(Math.random() * 100) < (20 + 2*qualidadeT1 - qualidadeT2)/200){
                    golC = golC + 1
                    console.log('Gooooooll')
                }
                if(Math.floor(Math.random() * 100) < (20 + 2*qualidadeT2 - qualidadeT1)/200){
                    golF = golF + 1
                    console.log('Gooooooll Fora')
                }
            }
        return {golPro: golC, golContra: golF}
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <View style={styles.areaContent}>
                        <Text style={styles.textTitle}>Campeonato Brasileiro Série B</Text>
                        <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Image style={styles.img} source={CaucaiaImg} />
                            <Image style={styles.img} source={CearaImg} />
                        </View>
                        <Text style={styles.placar}>0 - 0</Text>
                        <ScrollView style={styles.tempoReal}></ScrollView>
                        <View style={{display:'flex', marginTop:30, alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonProps} 
                                onPress={ () => { this.props.navigation.navigate('Resultado', this.getResultado())}}>
                                <Text style={styles.textButton}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}