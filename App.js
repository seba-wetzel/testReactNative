/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import INFO from 'react-native-device-info';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const uuid = INFO.getUniqueId();
    const baseOs = await INFO.getBaseOs();
    const build = await INFO.getBuildId();
    const bootloader = await INFO.getBootloader();
    const brand = INFO.getBrand();
    const carrier = await INFO.getCarrier();
    const ip = await INFO.getIpAddress();
    const host = await INFO.getHost();
    const mac = await INFO.getMacAddress();
    const phone = await INFO.getPhoneNumber();
    const recolectedData = [
      uuid,
      build,
      baseOs,
      build,
      bootloader,
      brand,
      carrier,
      ip,
      mac,
      host,
      phone,
    ];
    console.log(recolectedData);
    setData(recolectedData);
  };
  // React.useEffect(() => {
  //   (async () => {
  //     getData();
  //   })();
  // });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              {data
                ? data.map((data, i) => (
                    <Text key={i} style={styles.sectionTitle}>
                      {data}
                    </Text>
                  ))
                : null}
            </View>
            <Button onPress={getData} title="GET" />
            <Button onPress={() => setData([])} title="RESET" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <href>
      <img src={slide.src} alt={slide.alt} />
    </href>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));
