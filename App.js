import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeComponent from './src/WelcomeComponent';

// A very simple reducer
function myReducer(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch (action.type) {
    case 'SHARE_NAME':
      return state.name;
    default:
      return state;
  }
}

// A very simple store
let store = createStore(combineReducers({name: myReducer}));

// A screen!
function EnterName({count, dispatch, navigation, name}) {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        label="Enter Name"
        value={text}
        style={{margin: 20}}
        onChangeText={text => setText(text)}
      />

      <Button
        title="Go to WelcomeName"
        onPress={() => {
          if (text.length !== 0) {
            dispatch({
              type: 'SHARE_NAME',
              name: text,
            });
            navigation.navigate('WelcomeComponent');
          }
        }}
      />
    </View>
  );
}

// Connect the screens to Redux
let NameContainer = connect(state => ({name: state.name}))(EnterName);

// Create our stack navigator
let RootStack = createNativeStackNavigator();

// Render the app container component with the provider around it
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="EnterName" component={NameContainer} />
          <RootStack.Screen
            name="WelcomeComponent"
            component={WelcomeComponent}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
