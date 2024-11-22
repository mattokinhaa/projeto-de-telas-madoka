import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Pagina3({navigation}) {
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
        <Image style={styles.ima} source={require('../assets/tomoe.webp')} />
        <View
          style={{
            backgroundColor: '#f6d169', padding:10, borderRadius:10
          }}>
          <Text style={{ color: 'black', textAlign: 'center', }}>
            Mami Tomoe é uma garota de 16 anos. Ela salva Madoka e Sayaka de uma bruxa. Ela já havia feito um contrato com Kyubey e se oferece para ser uma mentora para treinar e ajudar as duas garotas a decidirem se querem se tornar Garotas Mágicas. Mami, ansiosa para adquirir novos amigos, demonstra a glória do heroísmo mágico, mas também mostra a Madoka e Sayaka o terrível perigo de ir aos domínios de uma bruxa.
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
    backgroundColor: '#ddac0e',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic',
    borderRadius: 10,
  },
});
