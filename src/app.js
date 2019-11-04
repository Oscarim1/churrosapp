import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './modules/Login/containers/login'
import Registro from './modules/Registro/containers/registro'



class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E27319' }}>
                
                <Button
                    title="Iniciar session"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
                <Button
                    title="Registrarse"
                    onPress={() => this.props.navigation.navigate('Registro')}
                />
            </View>
        );
    }
}



const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Login: Login,
        Registro: Registro,
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
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}