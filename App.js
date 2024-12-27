import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, SafeAreaView, ImageBackground, Text } from 'react-native'

import Header from './components/Header'
import CustomButton from './components/CustomButton'

export default function App() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('./assets/snow-background.jpg')} style={styles.background}>
        <View style={styles.container}>
          <Header />

          <TextInput
            style={styles.input}
            placeholder="Enter your login"
            placeholderTextColor="#808080"
            value={login}
            onChangeText={setLogin}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#808080"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <CustomButton
            title="Login"
            onPress={() => alert(`Welcome, ${login}!`)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
    paddingVertical: 10,
    fontSize: 16,
    marginVertical: 10,
    width: '100%',
    color: '#333',
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
})







// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View } from 'react-native'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })


// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import Header from './components/Header'
// import CustomButton from './components/CustomButton'

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Header/>
//       <View style={styles.container}>
//         <CustomButton title="Press me" onPres={() => alert('Hello')}/>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   safeArea:{
//     flex:1,
//     marginTop:20,
//     backgroundColor: '#000000'
//   }
// })
