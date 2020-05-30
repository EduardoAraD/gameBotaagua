import React,{ Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
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
    textRes: {
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        width: '80%',
        height: 'auto',
        backgroundColor: '#993333',
        color: '#f7f7f7',
        borderRadius: 10,
        marginBottom: 10,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f7f7f7',
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
        borderRadius: 20,
    },
    areaPremio: {
        marginTop: 20,
        backgroundColor: '#f7f7f7',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10
    },
    textPremio: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    areaItem: {
        display: 'flex',
        flexDirection: 'row',
    },
    textItem: {
        flex: 1,
        fontSize: 15,
        textAlign: 'left'
    },
    textItemValor: {
        flex: 1,
        fontSize: 15,
        textAlign: 'right',
        color: '#339933'
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


export default class Resultado extends Component {

    state = {
        params: this.props.navigation.state.params,
        
    }

    getComponentRes(golPro, golContra){
        if(golPro > golContra)
            return (<Text style={[styles.textRes,{backgroundColor:'#339933'}]}>VITÓRIA</Text>)
        else if( golPro === golContra)
            return <Text style={[styles.textRes,{backgroundColor: '#777777'}]}>EMPATE</Text>
        else
            return <Text style={styles.textRes}>DERROTA</Text>
    }

    render(){
        
        return(
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <View style={styles.areaContent}>
                        {this.getComponentRes(this.state.params.golPro,this.state.params.golContra)}
                        <Text style={styles.textTitle}>Campeonato Brasileiro Série B</Text>
                        <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Image style={styles.img} source={CaucaiaImg} />
                            <Image style={styles.img} source={CearaImg} />
                        </View>
                        <Text style={styles.placar}>{this.state.params.golPro} - {this.state.params.golContra}</Text>
                        <View style={styles.areaPremio}>
                            <Text style={styles.textPremio}>Prêmio no Jogo</Text>
                            <View style={styles.areaItem}>
                                <Text style={styles.textItem}>Torcida: </Text>
                                <Text style={styles.textItemValor}>+ 340 Torcedores</Text>
                            </View>
                            <View style={styles.areaItem}>
                                <Text style={styles.textItem}>Resultado</Text>
                                <Text style={styles.textItemValor}>R$ 0,00</Text>
                            </View>
                            <View style={styles.areaItem}>
                                <Text style={styles.textItem}>Publico presente</Text>
                                <Text style={styles.textItemValor}>R$ 10.000</Text>
                            </View>
                        </View>
                        <View style={{display:'flex', marginTop:20, alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonProps} 
                                onPress={ () => { this.props.navigation.navigate('Classification')}}>
                                <Text style={styles.textButton}>Classificação</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{display:'flex', marginTop:20, alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonProps} 
                                onPress={ () => { this.props.navigation.navigate('Inicio')}}>
                                <Text style={styles.textButton}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}