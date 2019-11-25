import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Input, Label, Item, Content, Card, CardItem, Text, Body, Button, Form, View, TouchableHighlight } from 'native-base';


export default class Registro extends Component {
    render() {
        return (

            <View style={[styles.container]} >
                <Container>
                    <Content>
                        <Form style={[styles.form]}>
                            <Item floatingLabel>
                                <Label>Nombre</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Correo</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Contraseña</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Confirma la contraseña</Label>
                                <Input />
                            </Item>
                            
                        </Form>
                        <Button primary style={styles.boton}><Text> Registrarse </Text></Button>
                    </Content>
                </Container>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E27319',
        
    },
    form: {
        flex: 1,  
        justifyContent: 'center',
        resizeMode: 'center',

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
        color: '#E27319',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 200,
        marginTop: 10,
        marginLeft: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    }
})