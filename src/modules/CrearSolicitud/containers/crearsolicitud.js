import React from 'react';
import { StyleSheet, Text, View, Picker, Button, Modal, TouchableHighlight } from 'react-native';

export default class CrearSolicitud extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pickerSelection: 'Default value!',
            pickerDisplayed: false
        }
    }

    setPickerValue(newValue) {
        this.setState({
            pickerSelection: newValue
        })

        this.togglePicker();
    }

    togglePicker() {
        this.setState({
            pickerDisplayed: !this.state.pickerDisplayed
        })
    }

    render() {
        const pickerValues = [
            {
                title: 'Evento Particular',
                value: 'evento particular'
            },
            {
                title: 'Cumpleaños',
                value: 'cumpleaños'
            },
            {
                title: 'Matrimonio',
                value: 'matrimonio'
            }
        ]

        return (
            <View style={styles.container}>
                <Text>El tipo de evento que elegiste es {this.state.pickerSelection}</Text>
                <Button onPress={() => this.togglePicker()} title={"Selecciona un tipo de evento"} />
               

                <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
                    <View style={[styles.vista]}>

                        <Text>Tipos de eventos</Text>
                        {pickerValues.map((value, index) => {
                            return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={[styles.boton]}>
                                <Text>{value.title}</Text>
                            </TouchableHighlight>
                        })}


                        <TouchableHighlight onPress={() => this.togglePicker()} style={[styles.boton]}>
                            <Text style={[styles.boton]}>Cancelar</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vista: {
        margin: 20,
        padding: 20,
        backgroundColor: '#E27319',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
        position: 'absolute',
    },
    boton: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    texto: {
        color: '#999'
    }
});
