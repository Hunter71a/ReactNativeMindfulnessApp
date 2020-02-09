import React from 'react';
import {TouchableNativeFeedback, TouchableHighlight,View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ThoughtItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginTop: 15,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 2
    }
});



export default ThoughtItem;