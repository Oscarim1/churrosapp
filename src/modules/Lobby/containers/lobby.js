import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Container, Form, Input, Label, Item, Content, Card, CardItem, Text, Body, Button } from 'native-base';


export default class Lobby extends Component {
    render() {
        return (
            <Container style={styles.container}>

                <Content padder contentContainerStyle={styles.content}>




                    <Body style={styles.body}>
                        <Image
                            style={styles.image}
                            source={require('./modules/images/logo.png')} />
                        
                        <Button rounded style={styles.boton}
                            onPress={() => this.props.navigation.navigate('CrearSolicitud')}>
                            <Text> Crear una solicitud </Text>
                        </Button>
                        <Button rounded style={styles.boton}
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Text> Salir </Text>
                        </Button>
                    </Body>



                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    boton: {
        alignItems: 'center',
        backgroundColor: '#E27319',
        

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        resizeMode: 'center'
    },

})