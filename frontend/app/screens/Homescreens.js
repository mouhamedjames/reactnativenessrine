import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

export default function Example() {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      title: "Welcome to My School",
      text: "Our school is dedicated to providing quality education.",
      image: 'https://assets.withfra.me/Landing.1.png',
    },
    {
      title: "Our Vision",
      text: "We strive to foster growth and creativity in every student.",
      image: 'https://assets.withfra.me/Landing.2.png',
    },
    {
      title: "Join Us",
      text: "Become a part of our community as a student or teacher.",
      image: 'https://assets.withfra.me/Landing.3.png',
    },
  ];

  const _renderItem = ({ item, index }) => {
    const imageHeight = index === 2 ? height * 0.7 : height * 1;
    return (
      <View style={[styles.hero, { height: imageHeight }]}>
        <Image
          source={{ uri: item.image }}
          style={styles.heroImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animatedContainer}>
        <Carousel
          layout={"default"}
          data={carouselItems}
          sliderWidth={width}
          itemWidth={width}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {activeIndex === 2 && (
          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('teacher', { screen: 'Teacherlogin' })
              }}>
              <View style={[styles.button, styles.blockButton]}>
                <Text style={styles.buttonText}>Get Started as Teacher</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('signupstudent')
              }}>
              <View style={[styles.button, styles.buttonSecondary, styles.blockButton]}>
                <Text style={styles.buttonText}>Get Started as Student</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  animatedContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  hero: {
    backgroundColor: '#d8dffe',
    margin: 12,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: '#56409e',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: '#f56b2a',
  },
  blockButton: {
    width: '100%',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});
