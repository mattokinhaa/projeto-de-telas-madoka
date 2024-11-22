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
        <Image style={styles.ima} source={require('../assets/miki.webp')} />
        <View
          style={{
            backgroundColor: '#0e8d94', padding:10, borderRadius:10
          }}>
          <Text style={{ color: '#fff', textAlign: 'center', }}>
            Sayaka Miki tem 14 anos e é melhor amiga de Madoka. Ela é uma estudante do segundo grau do Ensino Médio Mitakihara. Moleca, confiante, e um pouco ousada, ela mantém um forte senso de justiça e adota uma atitude heroica como uma menina mágica.
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
    backgroundColor: '#87CEFA',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic',
    borderRadius: 10,
  },
});
