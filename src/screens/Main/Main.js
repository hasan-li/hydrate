import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';

const waterBottle = require('./../../public/lottie/38282-water-bottle.json');

const TWO_HOURS = 7200000;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const Main = () => {
  const [displayAnimation, setDisplayAnimation] = useState(false);
  const [initialTime, setInitialTime] = useState(Number(new Date()));

  const calculateTimeLeft = () => {
    const difference = Number(new Date()) - initialTime;
    let timeLeft = {};
    if (difference < TWO_HOURS) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  useEffect(() => {
    if (displayAnimation) {
      setTimeout(() => {
        setDisplayAnimation(false);
        setInitialTime(Number(new Date()));
      }, 5000);
    }
  }, [displayAnimation]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Text key={interval}>
        {timeLeft[interval]} {interval}
      </Text>,
    );
  });

  useEffect(() => {
    if (!timerComponents.length) {
      setDisplayAnimation(true);
    }
  }, [timerComponents.length]);

  return (
    <View style={styles.container}>
      {timerComponents.length ? <View>{timerComponents}</View> : null}
      {displayAnimation && <LottieView source={waterBottle} autoPlay loop />}
    </View>
  );
};

export default Main;
