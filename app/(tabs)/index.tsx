// app/index.tsx
import { Picker } from '@react-native-picker/picker'; // For language selection
import React, { useState } from 'react';
import { Alert, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() { // Changed to HomeScreen as it's the index of the app folder
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State to hold selected language
  const [symptomText, setSymptomText] = useState(''); // State to hold symptom text input

  const handleMicPress = () => {
    // This will eventually start/stop voice recording
    console.log("Microphone button pressed!");
    // For now, just a console log and an alert
    Alert.alert("Mic Pressed", "Simulating voice input. Actual implementation in Week 2.");
  };

  const handleSubmit = () => {
    // This will eventually send data to backend
    console.log("Submit button pressed!");
    console.log("Language:", selectedLanguage);
    console.log("Symptoms:", symptomText);
    // For now, just a console log and an alert
    Alert.alert(
      "Submission Details",
      `Language: ${selectedLanguage}\nSymptoms: ${symptomText}`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>LinguaCare AI</Text>
        </View>

        {/* Content Area */}
        <View style={styles.content}>
          <Text style={styles.label}>Select Language:</Text>
          <Picker
            selectedValue={selectedLanguage}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="English" value="English" />
            <Picker.Item label="اردو" value="Urdu" />
            <Picker.Item label="پښتو" value="Pashto" />
          </Picker>

          <Text style={styles.label}>Enter Symptoms:</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            placeholder="Type your symptoms here..."
            value={symptomText}
            onChangeText={setSymptomText}
          />

          {/* Microphone and Submit Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
              <Text style={styles.buttonText}>🎙️ Speak</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Light Blue
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Handle status bar for Android
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Alice Blue
  },
  header: {
    backgroundColor: '#20B2AA', // Light Sea Green
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    marginTop: 15,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
  },
  textInput: {
    height: 120, // Increased height for multiline input
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    textAlignVertical: 'top', // Aligns text to the top for multiline
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  micButton: {
    backgroundColor: '#FF6347', // Tomato
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButton: {
    backgroundColor: '#4682B4', // Steel Blue
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});