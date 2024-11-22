import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Pagina1({navigation}) {
  return (
    <View
      style={{
        flex:1,
        backgroundColor: '#fcedfe',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fcedfe',
          padding: 10,
        }}>
        <Image
          style={styles.logo}
          source={require('../assets/logomdk')}
        />
        <Image style={styles.ima} source={require('../assets/kyoko.webp')} />
        <View
          style={{
            backgroundColor: '#d54c4a', padding:10, borderRadius:10
          }}>
          <Text style={{ color: '#fff', textAlign: 'center', }}>
            Kyoko Sakura é uma garota de 15 anos. Ela é apresentada como uma menina abrasiva, ardente, e egocêntrica que luta apenas para si, mas, mais tarde, adota uma perspectiva mais simpática. Ela valoriza muito comida e gosta de comer. Ela tem um trauma causado pela morte de sua família,e passou fome,o que explica por quê ela está sempre comendo. 
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: 'white'}}> Voltar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    resizeMode: 'contain',
    height: 120,
  },
  ima: {
    width: 300,
    resizeMode: 'contain',
    height: 220,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#d52626',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic',
    borderRadius: 10,
  },
});
