// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffce' }}>
      <View style={{ flex: 1 }}>
        
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Image
                style={styles.logo}
                source={require('../assets/logomdk')}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Pagina1')}>
              <Text> Kaname Madoka</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Pagina2')}>
              <Text>Akemi Homura</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Pagina3')}>
              <Text>Mami Tomoe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Pagina4')}>
              <Text>Miki Sayaka</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Pagina5')}>
              <Text>Kyoko Sakura</Text>
            </TouchableOpacity>

          </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f3d7c2',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic',
    borderRadius: 10,
    
  },

  logo: {
    width: 250,
    resizeMode: 'contain',
    height: 120,
  },
});
export default HomeScreen;
