import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const introText =
  'Lorem ipsum dolor sit amet consectetur adipiscing elit nunc sodales, litora himenaeos ligula arcu massa montes cubilia tempus, nullam dis ad proin cursus ultricies aliquet condimentum. Molestie morbi pretium maecenas accumsan nam velit at, nibh cubilia est primis habitasse semper auctor, cum imperdiet sagittis pellentesque mollis per. Montes litora blandit phasellus nulla mi, porta lectus nisi nostra leo scelerisque, libero inceptos tortor taciti.';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    textAlign: 'center',
    paddingTop: 10,
  },
  globoLogo: {
    height: 100,
    width: 100,
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300',
  },
});

const Home = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.globoLogo} source={require('./images/logo.png')} />
      <Text style={styles.title}>Welcome to GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
    </View>
  );
};

export default Home;
