import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ThoughtItem from './components/ThoughtItem';
import ThoughtInput from './components/ThoughtInput';
import { getWorldAlignment } from 'expo/build/AR';

export default function App() {

  const [mindfulThoughts, setMindfulThoughts] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log('RE-RENDERING COMPONENT');
  console.log(mindfulThoughts);

  const addThoughtHandler = thoughtTitle => {
    if (thoughtTitle.length === 0) {
      return;
    }
    setMindfulThoughts(currentThoughts => [...currentThoughts, { id: Math.random().toString(), value: thoughtTitle }
    ]);
    setIsAddMode(false);
  };

  const removeThoughtHandler = thoughtId => {
    console.log('To Be Deleted: ' + thoughtId);


    setMindfulThoughts(currentThoughts => {
      console.log(currentThoughts);
      return currentThoughts.filter((thought) => thought.id !== thoughtId);
   
    });

  };

  const cancelTHoughtAdditionHandler = () => {
    setIsAddMode(false);
  };


  return (
    <View style={styles.screen}>
      <Button title='Add New Thought' onPress={() => setIsAddMode(true)} />
      <ThoughtInput
        visible={isAddMode}
        onAddThought={addThoughtHandler}
        onCancel={cancelTHoughtAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={mindfulThoughts}
        renderItem={itemData => (
          <ThoughtItem
            id={itemData.item.id}
            onDelete={removeThoughtHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  //   inputContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center'
  //   },
  //   input: {
  //     width: '80%',
  //     borderColor: 'black',
  //     borderWidth: 2,
  //     padding: 5
  //   }  
});
