import React, { Component } from 'react'
import { StyleSheet, Picker, ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import screnFundo from '../../assets/imgs/fundo.jpg'
import HeaderClube from '../components/HeaderClube'
import ItemClass from '../components/ItemClassification'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fcfcfc',
        marginBottom: 15,
    },
    imageBackground: {
        flex: 1,
    },
    areaContent: {
        margin: 20,
    },
    text: {
        color: '#fcfcfc',
        fontSize: 18,
        fontWeight: 'bold',
    },
    select: {
        marginTop: 5,
        height: 40,
        //width: '100%',
        backgroundColor: '#fcfcfc',
        color: '#123456',
    },
    areaTem: {
        marginTop: 30,
        height: 20,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#333399',
        //justifyContent: 'center'
    },
    textDados: {
        width: 20,
        textAlign: 'center',
        fontSize: 12,
        color: '#f7f7f7'
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

export default class Classification extends Component {

    state = {
        comp: '',
        class: [
            { name: "Ferroviario", escudo: "ferroviario", pt: 13, j: 6, v: 4, e: 1, gf: 13, gs: 8 },
            { name: "Caucaia EC", escudo: "caucaia", pt: 12, j: 6, v: 3, e: 3, gf: 11, gs: 4 },
            { name: "Ceará SC", escudo: "ceara", pt: 7, j: 6, v: 2, e: 1, gf: 16, gs: 13 },
            { name: "Caxias do Sul", escudo: "caxias", pt: 1, j: 6, v: 0, e: 1, gf: 5, gs: 20 },
        ]
    }

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={screnFundo}
                    style={styles.imageBackground}>
                    <HeaderClube name='Caucaia EC' escudo='caucaia' />
                    <View style={styles.areaContent}>
                        <Text style={styles.title}>Classificação</Text>
                        <Text style={styles.text}>Escolha a Competição</Text>
                        <Picker style={styles.select} 
                            selectedValue={this.state.comp}
                            onValueChange={(name) => this.setState({ comp: name})}
                            >
                            <Picker.Item label='Cearence' value='cearence' />
                            <Picker.Item label='Brasileiro Série D' value='brasileiroD' />
                            <Picker.Item label='Brasileiro Série C' value='brasileiroC' />
                            <Picker.Item label='Brasileiro Série B' value='brasileiroB' />
                            <Picker.Item label='Brasileiro Série A' value='brasileiroA' />
                        </Picker>
                        <View style={styles.areaTem} >
                            <Text style={[styles.textDados, {width: 40}]} >Pos</Text>
                            <Text style={[styles.textDados, {width: 50, marginRight: 40}]}>Nome</Text>
                            <Text style={styles.textDados}>PT</Text>
                            <Text style={styles.textDados}>J</Text>
                            <Text style={styles.textDados}>V</Text>
                            <Text style={styles.textDados}>E</Text>
                            <Text style={styles.textDados}>D</Text>
                            <Text style={styles.textDados}>SG</Text>
                            <Text style={styles.textDados}>GF</Text>
                            <Text style={styles.textDados}>GS</Text>
                            <Text style={[styles.textDados, {width: 30, marginRight: 10}]}>%</Text>
                        </View>
                        { this.state.class.map((clube, index) => {
                            return <ItemClass key={index}  pos={index}
                                                    name={clube.name}
                                                    escudo={clube.escudo}
                                                    pt={clube.pt}
                                                    j={clube.j}
                                                    v={clube.v}
                                                    e={clube.e}
                                                    gf={clube.gf}
                                                    gs={clube.gs}
                                                     />
                        })}
                        <View style={{display:'flex', marginTop:30, alignItems:'center'}}>
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