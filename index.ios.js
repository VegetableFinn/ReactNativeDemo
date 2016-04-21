/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class demo extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={[styles.item, styles.center]}>
              <Text>酒店</Text>
            </View>
            <View style={styles.item}>
              <View style={[styles.center, styles.flex]}>
                <Text>海外酒店</Text>
              </View>
              <View style={[styles.center, styles.flex]}>
                <Text>特惠酒店</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={[styles.center, styles.flex]}>
                <Text>团购</Text>
              </View>
              <View style={[styles.center, styles.flex]}>
                <Text>客栈.公寓</Text>
              </View>
            </View>
            <View></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:1,
    borderColor: 'red',
    flexDirection: 'row'
  },
  item:{
    flex:1,
    height:80,
    borderColor: 'blue',
    borderWidth:1
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex:{
    flex:1
  }
});

AppRegistry.registerComponent('demo', () => demo);
