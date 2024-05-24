import {  Animated, Easing } from 'react-native';
import React, {useState, useEffect} from 'react';
import Svg, {G, Rect, Defs, ClipPath, Circle  } from 'react-native-svg';

const LoadingSVG = () => {

    const spinValue = useState(new Animated.Value(0))[0];
  
    useEffect(() => {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }, []);
  
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.View style={{ transform: [{ rotate: spin }], alignSelf: 'center' }}>
      <Svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <G clip-path="url(#clip0_372_1085)">
  <Rect width="40" height="40" transform="translate(0.5)" fill="white"/>
  <Rect x="13.7273" y="17.2729" width="5.45455" height="12.7273" rx="2.72727" transform="rotate(90 13.7273 17.2729)" fill="#05976A" fill-opacity="0.7"/>
  <Rect x="4.92932" y="7.78662" width="5.45455" height="12.7273" rx="2.72727" transform="rotate(-45 4.92932 7.78662)" fill="#05976A" fill-opacity="0.9"/>
  <Rect x="18.2727" y="27.2729" width="5.45455" height="12.7273" rx="2.72727" fill="#05976A" fill-opacity="0.4"/>
  <Rect x="13.9297" y="23.2139" width="5.45455" height="12.7273" rx="2.72727" transform="rotate(45 13.9297 23.2139)" fill="#05976A" fill-opacity="0.6"/>
  <Rect x="24.2137" y="27.0713" width="5.45455" height="12.7273" rx="2.72727" transform="rotate(-45 24.2137 27.0713)" fill="#05976A" fill-opacity="0.3"/>
  <Rect opacity="0.3" x="41" y="17.2729" width="5.45455" height="12.7273" rx="2.72727" transform="rotate(90 41 17.2729)" fill="#05976A" fill-opacity="0.2"/>
  <Rect x="33.2141" y="3.9292" width="5.45455" height="12.7273" rx="2.72727" transform="rotate(45 33.2141 3.9292)" fill="#05976A" fill-opacity="0.1"/>
  <Rect x="18.2727" width="5.45455" height="12.7273" rx="2.72727" fill="#05976A"/>
  </G>
  <Defs>
  <ClipPath id="clip0_372_1085">
  <Rect width="40" height="40" fill="white" transform="translate(0.5)"/>
  </ClipPath>
  </Defs>
  </Svg>
  </Animated.View>
    );
  };

export default LoadingSVG