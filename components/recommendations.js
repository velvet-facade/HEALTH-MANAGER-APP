import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import StackNavigator from '../Navigation/StackNavigator';

import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Recom extends React.Component {
  render() {
    return (
      <View style={{ padding: 40 }}>
        <Card
          style={{ height: 150, borderRadius: 20, padding: 15, width: 250 }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.youtube.com/');
            }}>
            <Image
              source={require('../assets/Youtube-logo-png.png')}
              style={{
                height: 25,
                width: 110,
                justifyContent: 'center',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 35,
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.youtube.com/');
              }}>
              <Text style={{ fontFamily: 'jost' }}>ASMR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Info')}
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Ionicons
                name={'information-circle-outline'}
                size={20}
                color={'#a38f37'}
              />
              <Text
                style={{
                  color: '#a38f37',
                  textDecorationLine: 'underline',
                  fontFamily: 'googleSans',
                }}>
                info
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
        <View style={{ marginTop: 10 }}>
          <Card
            style={{ height: 150, borderRadius: 20, padding: 15, width: 250 }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.youtube.com/');
              }}>
              <Image
                source={require('../assets/Youtube-logo-png.png')}
                style={{
                  height: 25,
                  width: 110,
                  justifyContent: 'center',
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 35,
              }}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('whatsapp://app');
                }}>
                <Text style={{ fontFamily: 'jost' }}>
                  Meditation recommendations
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </View>
    );
  }
}
