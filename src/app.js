import * as React from 'react';
import { Button, View, Text, Image, TouchableHighlight} from 'react-native';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './modules/Login/containers/login'
import Registro from './modules/Registro/containers/registro'
import Lobby from './modules/Lobby/containers/lobby'
import CrearSolicitud from './modules/CrearSolicitud/containers/crearsolicitud'



class Home extends React.Component {
    render() {
        return (

            <View style = { [styles.container]} >
            <Image
                    style={styles.image}
                    source={require('./modules/images/logoFondonaranjo.png')} />
                <TouchableHighlight
                    style={styles.botom}
                    onPress={() => this.props.navigation.navigate('Login')}>

                    <Text style={styles.texto}> Iniciar</Text>

                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.botom}
                    onPress={() => this.props.navigation.navigate('Registro')}>

                    <Text style={styles.texto}> Registrarse</Text>
                </TouchableHighlight>
                </View>
                

        );
    }
}


const RootStack = createStackNavigator(
    {
        Home: Home,
        Login: Login,
        Registro: Registro,
        Lobby: Lobby,
        CrearSolicitud: CrearSolicitud,
        
    },
    {
        headerMode: 'none',
        
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);
/*
const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        borderRadius: 150,
        resizeMode: 'center'
    }
})
*/

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E27319',
    },
    botom: {
        width: 240,
        height: 45,
        borderRadius: 200,
        backgroundColor: "white",
        marginTop: 50,
        marginLeft: 20,

    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        resizeMode: 'center'
    },
    headerLeft: {
        flex: 1

    },
    texto: {
        color:'#E27319',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 200,
        marginTop: 10,
        marginLeft: 10,
    }
})

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}