import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Form, Input, Label, Item, Content, Card, CardItem, Text, Body, Button } from 'native-base';


export default class Lobby extends Component {
    render() {
        return (
            <Container>

                <Content padder contentContainerStyle={styles.content}>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.textCenter}>Inicio de session</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Item rounded>
                                    <Input placeholder='Usuario' />
                                </Item>
                                <Item rounded>
                                    <Label>Contraseña</Label>
                                    <Input />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button primary style={styles.boton}><Text> de prueba </Text></Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textCenter: {
        textAlign: 'center',
        width: '100%'
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    boton: {
        marginLeft: '40%'
    }

})