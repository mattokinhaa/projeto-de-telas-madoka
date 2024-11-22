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
        <Image style={styles.ima} source={require('../assets/madoka.webp')} />
        <View
          style={{
            backgroundColor: 'pink', padding:10, borderRadius:10
          }}>
          <Text style={{ color: 'black', textAlign: 'center', }}>
            Madoka Magica. É uma garota de 14 anos, filha de Junko Kaname e Tomohisa Kaname, irmã mais velha de Tatsuya. Um dia,ela tem um sonho de uma misteriosa garota lutando contra uma criatura sinistra. No dia seguinte, Akemi Homura, a garota de seu sonho,vem a sua classe como uma estudante transferida.
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
    backgroundColor: '#f7c9fb',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic',
    borderRadius: 10,
  },
});
