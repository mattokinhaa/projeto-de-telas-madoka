import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Pagina2({navigation}) {
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
        <Image style={styles.ima} source={require('../assets/homura.webp')} />
        <View
          style={{
              backgroundColor: '#674d69', padding:10, borderRadius:10
          }}>
          <Text style={{ color: 'white', textAlign: 'center', padding:10 }}>
            Homura Akemi é uma garota de 13 a 26 anos, é vista pela primeira vez por Madoka Kaname em um sonho em que ela luta contra um monstro. No dia seguinte ao sonho, Homura aparece na escola de Madoka como uma aluna transferida. Ela, a partir de então, começa a alertar Madoka e sua amiga sobre a vida de garota mágica.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text> Voltar </Text>
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
    backgroundColor: '#a461ad',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic',
    borderRadius: 10,
  },
});
