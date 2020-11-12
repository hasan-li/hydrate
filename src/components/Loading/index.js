import React from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const Loading = () => (
  <View style={styles.container}>
    <Text>Loading</Text>
    <ActivityIndicator size="large" />
    );
  </View>

export default Loading;
