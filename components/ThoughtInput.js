import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const ThoughtInput = props => {
    const [enteredThought, setEnteredThought] = useState('');

    const thoughtInputHandler = enteredText => {
        setEnteredThought(enteredText);
    };

    const addThoughtHandler = () => {
        {
            props.onAddThought(enteredThought);
            setEnteredThought('');
        }
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Mindful Thoughts"
                    style={styles.input}
                    onChangeText={thoughtInputHandler}
                    value={enteredThought}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addThoughtHandler} />
                    </View>
                </View>
                {/* {() => props.onChangeText(enteredThought)} />   */}
                {/* //{props.onAddThought.bind(this, enteredThought)} /> */}
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        margin: 10,
        marginTop: 10
    },
    button: {
        margin: 10,
        width: '35%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',        
        width: '60%'
        }
});

export default ThoughtInput;
