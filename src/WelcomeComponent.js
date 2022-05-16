import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {Slider} from 'react-native';
import {useSelector} from 'react-redux';

function WelcomeComponent({name}) {
  const sliderStyle = {
    sliderDummy: {
      backgroundColor: '#d3d3d3',
      width: 300,
      height: 30,
      borderRadius: 50,
      position: 'absolute',
    },
    sliderReal: {
      backgroundColor: '#119EC2',
      width: (this.state.slideValue / 50) * 300,
      height: 30,
    },
  };
  const nameParam = useSelector(state => state.name);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}>
      <Text
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00FF00',
        }}>
        `Your name is : {nameParam}`
      </Text>
      <Button
        mode="text"
        onPress={() => console.log('Pressed')}
        style={{
          width: '90%',
        }}>
        Press me
      </Button>
      <Button
        style={[{width: '90%', margin: 20, backgroundColor: '#808080'}]}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Button
        mode="contained"
        style={[{width: '90%', margin: 20, backgroundColor: '#ADD8E6'}]}
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <View
        style={{
          alignItems: 'center ',
          backgroundColor: '#DDDDDD',
          width: '90%',
          margin: 20,
        }}
        onPress={() => console.log('Pressed')}>
        <Text>Slide Me to Continue</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbImage={'src/asset/daim.png'}
        />
        <View style={{borderRadius: 50, overflow: 'hidden'}}>
          <View style={{flexDirection: 'row', position: 'absolute'}}>
            <View style={sliderStyle.sliderDummy}></View>
            <View style={sliderStyle.sliderReal}></View>
          </View>
          <Slider
            style={{width: 300, height: 30, borderRadius: 50}}
            minimumValue={0}
            maximumValue={50}
            value={this.state.slideValue}
            onValueChange={value => this.setState({slideValue: value})}
            maximumTrackTintColor="transparent"
            minimumTrackTintColor="transparent"
          />
        </View>
      </View>
    </View>
  );
}
export default WelcomeComponent;
