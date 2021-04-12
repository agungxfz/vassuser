import React from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.saldo]}>
            <Button
              title="Saldo e-Cash"
              onPress={() => Alert.alert('Rp 100.000')}
            />
          </View>
        </View>
        <View style={styles.row}>
        <TextInput
        style={styles.input}
        placeholder="Cari sesuatu..."
      />
          {/* <View style={[styles.box]}></View> */}
        </View>
        <View style={styles.row}>
          <View style={[styles.textCenter]}>
          <Text>Official Store</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.box, styles.box]}>
          <Button
              title="Send"
              onPress={() => Alert.alert('Menu Send')}
            /></View>
          <View style={[styles.box, styles.box]}>
          <Button
              title="Food"
              onPress={() => Alert.alert('Menu Food')}
            /></View>
          <View style={[styles.box, styles.box]}><Button
              title="Mart"
              onPress={() => Alert.alert('Menu Mart')}
            /></View>
          <View style={[styles.box, styles.box]}>
          <Button
              title="Take It"
              onPress={() => Alert.alert('Menu Take It')}
            /></View>
        </View>
        <View style={styles.row}>
          <View style={[styles.box, styles.box]}></View>
          <View style={[styles.box, styles.box]}></View>
          <View style={[styles.box, styles.box]}></View>
        </View>
        <View style={styles.row}>
          <View style={[styles.box]}></View>
        </View>
        <View style={styles.row}>
          <View style={[styles.box]}></View>
        </View>
        <View style={styles.row}>
          <View style={[styles.box]}></View>
        </View>
        <View style={styles.row}>
          <View style={[styles.box, styles.box]}></View>
          <View style={[styles.box, styles.box]}></View>
          <View style={[styles.box, styles.box]}></View>
        </View>
      </View>
    );
  }
}
class AccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Account Screen</Text>
      </View>
    );
  }
}
class InboxScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Inbox Screen</Text>
      </View>
    );
  }
}
class OrderScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Order Screen</Text>
      </View>
    );
  }
}
class ChatScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  saldo: {
    flex: 1,
    height: 70,
    backgroundColor: 'white',
  },
  box: {
    flex: 1,
    height: 30,
    backgroundColor: 'white',
  },
  box2: {
    backgroundColor: 'green',
  },
  box3: {
    backgroundColor: 'orange',
  },
  two: {
    flex: 2,
  },
  input: {
    height: 40,
    borderWidth: 1,
  },
  textCenter: {
      justifyContent: 'center',
    alignItems: 'center',
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    Order: {
      screen: OrderScreen,
      navigationOptions: {
        tabBarLabel: 'Order',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
          </View>
        ),
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-chatbox'} />
          </View>
        ),
      },
    },
    Inbox: {
      screen: InboxScreen,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-mail'} />
          </View>
        ),
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: {backgroundColor: '#06ab9f'},
  },
);

export default createAppContainer(TabNavigator);
