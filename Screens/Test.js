import { Text, View } from 'react-native';
export default (props) => {
  let [fontsLoaded] = useFonts({
    jost: require('../assets/Jost/Jost-VariableFont_wght.ttf'),
    creamCake: require('../assets/CreamCake.otf'),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return <View>Hello world</View>;
  }
};
