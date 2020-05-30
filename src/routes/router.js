import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from '../screens/Login'
import CreateClube from '../screens/CreateClube'
import Inicio from '../screens/Inicio'
import Calendar from '../screens/Calendar'
import Classification from '../screens/Classification'
import CenterTreining from '../screens/CenterTrening'
import Stadium from '../screens/Stadium'
import Torcida from '../screens/Torcida'
import NvJogador from '../screens/NvJogador'
import ProxGame from '../screens/ProxGame'
import JogoReal from '../screens/JogoTempoReal'
import Resultado from '../screens/Resultado'
import Loading from '../screens/Loading'

const Navigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },

    CreateClube: {
        screen: CreateClube,
        navigationOptions: {
            header: null
        }
    },
    Calendar: {
        screen: Calendar,
        navigationOptions: {
            header: null
        }
    },
    CenterTreining: {
        screen: CenterTreining,
        navigationOptions: {
            header: null
        }
    },
    Classification: {
        screen: Classification,
        navigationOptions:{
            header: null
        }
    },
    Inicio: {
        screen: Inicio,
        navigationOptions: {
            header: null
        }
    },
    JogoReal: {
        screen: JogoReal,
        navigationOptions: {
            header: null
        }
    },
    Loading: {
        screen: Loading,
        navigationOptions: {
            header: null
        }
    },
    NvJogador: {
        screen: NvJogador,
        navigationOptions: {
            header: null
        }
    },
    ProxGame: {
        screen: ProxGame,
        navigationOptions: {
            header: null
        }
    },
    Resultado: {
        screen: Resultado,
        navigationOptions: {
            header: null
        }
    },
    Torcida: {
        screen: Torcida,
        navigationOptions: {
            header: null
        }
    },
    Stadium: {
        screen: Stadium,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'Login'
})

export default Router =  createAppContainer(Navigator)