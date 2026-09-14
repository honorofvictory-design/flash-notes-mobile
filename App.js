import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NoteDetailScreen from './screens/NoteDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load notes from AsyncStorage when app starts
  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('notes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
      setLoading(false);
    } catch (error) {
      console.error('Error loading notes:', error);
      setLoading(false);
    }
  };

  const saveNotes = async (updatedNotes) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  };

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title: title || 'Untitled Note',
      content: content,
      date: new Date().toLocaleString(),
    };
    const updatedNotes = [...notes, newNote];
    saveNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    saveNotes(updatedNotes);
  };

  const updateNote = (id, title, content) => {
    const updatedNotes = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: title || 'Untitled Note',
            content: content,
            date: new Date().toLocaleString(),
          }
        : note
    );
    saveNotes(updatedNotes);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          {/* Loading state */}
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#667eea',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: '⚡ Flash Notes' }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              notes={notes}
              onAddNote={addNote}
              onDeleteNote={deleteNote}
              onUpdateNote={updateNote}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="NoteDetail"
          options={{ title: 'Note Details' }}
        >
          {(props) => (
            <NoteDetailScreen
              {...props}
              onUpdateNote={updateNote}
              onDeleteNote={deleteNote}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
