import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, Image } from 'react-native'
import screnFundo from '../../assets/imgs/fundo.jpg'
import HeaderClube from '../components/HeaderClube'
import PlayerClube from '../../assets/escudos/br/caucaia.png'
import AdversarioClube from '../../assets/escudos/br/ceara.png'
import vsImage from '../../assets/imgs/vs.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    areaCards: {
        display: 'flex',
        flex: 1,
        margin: 2,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itemCard: {
        backgroundColor: '#3e3e3e',
        height: 70,
        width: '32%',
        justifyContent: 'space-around',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f7f7f7'
    },
    textTitleCard: {
        fontSize: 18,
        textAlign: 'center',
        color: '#ececec'
    },
    textValorCard: {
        fontSize: 15,
        color: '#ececec',
        textAlign: 'center',
    },
    areaContent: {
        flex: 3,
        display: 'flex',
        flexDirection: 'row'
    },
    cardContent: {
        flex: 1,
        //backgroundColor: '#123456',
        justifyContent: 'space-around',
        margin: 5,
        borderRadius: 20,
        borderColor: '#f7f7f7',
        borderWidth: 2,
    },
    textCardContentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        //marginTop: 10,
        color: '#fcfcfc',
        textAlign: 'center'
    },
    textCardContentValor: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fcfcfc',
        textAlign: 'center'
    },
    areaCardCenter: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    textCenterValor: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#123456'
    },
    areaProxGame: {
        flex: 2,
        display: 'flex',
        backgroundColor: '#121212',
        marginTop: 10
    },
    areaProxGameDados:{
        flex: 5,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    textProxComp: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f7f7f7',
        textAlign: 'center'
    },
    textProxRod: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#ececec',
        textAlign: 'center',
        marginTop: 5
    },
    escudoImg: {
        height: '90%',
        flex: 2,
        resizeMode:'contain',
    },
    vsImg: {
        height: '40%',
        resizeMode:'contain',
        margin: 5,
        flex: 0.8,
    },
    areaButton:{
        flex: 3,
        display: 'flex',
        marginTop: 10,
        flexDirection:'row',
        justifyContent: 'flex-end'
    },
    areaButtonTouch: {
        width: '60%',
        backgroundColor: '#123456',
        height: '100%',
        justifyContent: 'center',
        borderTopStartRadius: 30,
        borderColor: '#f7f7f7',
        borderTopWidth: 2,
        borderLeftWidth: 2,
    },
    textButton: {
        fontSize: 26,
        fontWeight: 'bold',
        marginRight: 10,
        textAlign: 'right',
        color: '#fcfcfc'
    }
})

export default class CreateClube extends Component {

    state = {
        params: this.props.navigation.state.params,
        user: {},
        name: '',
        escudo: '',
        jogo: {},
        money: 0,
        valueTorcida: 0,
        valueTreino: 0,
        valueIntalations: 0,
        valueStadium: 0,
    }
    /*
    async getDados() {
        const user = await storage.getKeys()
        return user
    }

    Uptade(name){
        let user = {}
        //console.log('entrou')
        if(name === ''){
            console.log( 'teste', user)
            user = this.getDados()
            console.log( 'teste', user.name)
            this.setState({ name: 'ok'})
        }
    }
    */
    render(){
        //console.log(this.props.navigation.state.params)
        //this.Uptade(this.state.name)
        return (
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <HeaderClube name={this.state.params.name} escudo={this.props.navigation.state.params.escudo} />
                    <View style={{display: 'flex', flex: 1}}>
                        <View style={styles.areaCards}>
                           <TouchableOpacity style={styles.itemCard} 
                                onPress={ () => { this.props.navigation.navigate('Calendar')}}>
                               <Text style={styles.textTitleCard}>Calendário</Text>
                               <Text style={styles.textValorCard}>2019</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.itemCard}>
                               <Text style={styles.textTitleCard}>Finanças</Text>
                               <Text style={styles.textValorCard}> R$ +2.345</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.itemCard}
                                onPress={ () => { this.props.navigation.navigate('Classification')}} >
                               <Text style={styles.textTitleCard}>Classificação</Text>
                               <Text style={styles.textValorCard}>12°</Text>
                           </TouchableOpacity>
                        </View>
                        <View style={{flex: 5, alignItems:'center'}}>
                            <View style={styles.areaContent}>
                                <TouchableOpacity style={styles.cardContent} 
                                    onPress={ () => { this.props.navigation.navigate('CenterTreining')}} >
                                    <Text style={styles.textCardContentTitle}>Instalações</Text>
                                    <Text style={styles.textCardContentValor}>26</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cardContent}
                                    onPress={ () => { this.props.navigation.navigate('Stadium')}} >
                                    <Text style={styles.textCardContentTitle}>Estádio</Text>
                                    <Text style={styles.textCardContentValor}>34</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.areaCardCenter}>
                                <Text style={styles.textCenterValor}>85</Text>
                            </View>
                            <View style={styles.areaContent}>
                                <TouchableOpacity style={styles.cardContent}
                                    onPress={ () => { this.props.navigation.navigate('Torcida')}} >
                                    <Text style={styles.textCardContentValor}>20</Text>
                                    <Text style={styles.textCardContentTitle}>Torcida</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cardContent}
                                    onPress={ () => { this.props.navigation.navigate('NvJogador')}} >
                                    <Text style={styles.textCardContentValor}>36</Text>
                                    <Text style={styles.textCardContentTitle}>Treino dos Jogadores</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.areaProxGame}>
                            <View style={styles.areaProxGameDados}>
                                <Image source={PlayerClube} style={styles.escudoImg} />
                                <Image source={vsImage} style={styles.vsImg} />
                                <Image source={AdversarioClube} style={styles.escudoImg} />
                                <View style={{flex: 3}}>
                                    <Text style={styles.textProxComp}>Campeonato Cearence Serie A</Text>
                                    <Text style={styles.textProxRod}>4° Rodada</Text>
                                </View>
                            </View>
                            <View  style={styles.areaButton}>
                                <TouchableOpacity style={styles.areaButtonTouch}
                                    onPress={ () => { this.props.navigation.navigate('ProxGame')}} >
                                    <Text style={styles.textButton}>Próximo Jogo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>    
            </View>
        )
    }
}