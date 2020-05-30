import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
    container:{
        height: 70,
        width: '100%',
        backgroundColor: '#3e3e3e',
        marginTop: 10,
        //opacity: 0.3,
        //marginBottom: 5,
        display: 'flex',
        borderRadius: 10
        //justifyContent: 'center'
    },
    textTitle:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f7f7f7',
        marginLeft: 5,
        textAlignVertical: 'center'
    },
    areaDados: {
        flex: 1,
        flexDirection: 'row',
    },
    textNv: {
        marginLeft: 10,
        fontSize: 22,
        color: '#f7f7f7',
        textAlignVertical: 'center'
    },
    button: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        borderTopStartRadius: 28,
        //borderTopWidth: 2,
        //borderTopColor: '#3e3e3e',
        //borderLeftWidth: 2,
        //borderLeftColor: '#3e3e3e'
    },
    textButton: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'right',
        marginRight: 20,
        color: '#123456'
    },
    areaCusto: {
        display: 'flex',
        flexDirection: 'row',
        height: 18,
        width: '50%',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#993333',
    },
    textCustoNome: {
        flex: 2,
        textAlign: 'center',
        color: '#f7f7f7',
        textAlignVertical: 'center'
    },
    textCustoValor: {
        flex: 3,
        marginRight: 15,
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#f7f7f7',
        textAlignVertical: 'center'
    },
})

export default props => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textTitle}>{props.title}</Text>
                <View style={styles.areaDados}>
                    <View style={styles.areaDados}>
                        <Text style={styles.textNv}>Nv.</Text>
                        <Text style={[styles.textNv,{fontWeight: 'bold', fontSize: 25}]}>1</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Melhorar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.areaCusto}>
                <Text style={styles.textCustoNome}>Custo:</Text>
                <Text style={styles.textCustoValor}>R$ 2.000</Text>
            </View>
        </View>
    )
}