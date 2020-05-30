import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, Image, TextInput, ScrollView } from 'react-native'
import screnFundo from '../../assets/imgs/fundo.jpg'
import CaucaiaImg from '../../assets/escudos/br/caucaia.png'
import CearaImg from '../../assets/escudos/br/ceara.png'
import FlamengoImg from '../../assets/escudos/br/flamengo.png'
import BotaaguaImg from '../../assets/escudos/br/botaagua.png'
import FerroviarioImg from '../../assets/escudos/br/ferroviario.png'
import TubaraoImg from '../../assets/escudos/br/atleticotubarao.png'
import FortalezaImg from '../../assets/escudos/br/fortaleza.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    viewContainer: {
        margin: 20,
        display: 'flex'
    },
    titleText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fcfcfc',
        justifyContent:'center',
        textAlign: 'center',
        marginBottom: 20,
    },
    titleInput: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#fcfcfc',
    },
    input: {
        width: '100%',
        height: 40,
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6
    },
    scroll: {
        marginTop: 20,
        height: 280,
        width: '100%',
        backgroundColor: '#123456',
    },
    areaImg: {
        borderColor: '#f7f7f7',
        borderWidth: 2,
    },
    escudoImg: {
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 200,
        width: 200,
        resizeMode:'contain',
    },
    buttonProps: {
        backgroundColor: '#343434',
        borderRadius: 10,
        width: '80%',
        height: '32%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fcfcfc',
    }
})

const initialState = { name: '', sigla: '', escudo: '',
            escudos:[CaucaiaImg, CearaImg, FlamengoImg, BotaaguaImg, FerroviarioImg, TubaraoImg, FortalezaImg],
            escudosText:['caucaia','ceara','flamengo','botaagua','ferroviario','tubarao','fortaleza']
}

export default class CreateClube extends Component {

    state = { ...initialState }

    setEscudo(valor){
        var escudo = this.state.escudosText[valor]
        this.setState({ escudo })
    }

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <View style={styles.viewContainer} >
                        <Text style={styles.titleText}>Crie seu Clube</Text>
                        <Text style={styles.titleInput}>Nome do Clube</Text>
                        <TextInput placeholder="Nome..." style={styles.input}
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name} />
                        <Text style={styles.titleInput}>Sigla do Clube</Text>
                        <TextInput placeholder="Sigla..." style={styles.input}
                            onChangeText={sigla => this.setState({ sigla })}
                            value={this.state.sigla} />
                        <Text style={styles.titleInput}>Selecione Escudo</Text>
                        <ScrollView style={styles.scroll} horizontal={true} >
                            {this.state.escudos.map((brasao, index) => {
                                var escolhido = this.state.escudosText[index] === this.state.escudo ? {backgroundColor:'#999933'} : {}
                                
                                return <TouchableOpacity key={index} style={[styles.areaImg, escolhido]}
                                            onPress={ () => this.setEscudo(index)}>
                                            <Image source={brasao} style={styles.escudoImg} />
                                        </TouchableOpacity>
                            })}
                        </ScrollView>
                        <View style={{display:'flex', padding:20, alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonProps} 
                                onPress={ () => { this.props.navigation.navigate('Loading',
                                        {name: this.state.name, escudo: this.state.escudo, sigla: this.state.sigla})
                                                }}>
                                <Text style={styles.textButton}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}