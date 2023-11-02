import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const {width} = Dimensions.get('screen');
// const {width, height} = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <View style={[style.imageWrapper, style.elevation]}>
          <Image
            source={require('../../assets/img/img1.jpg')}
            style={style.musicImage}
          />
        </View>
        <View>
          <Text style={[style.songContent, style.songTitle]}>Title</Text>
          <Text style={[style.songContent, style.artistName]}>Artist name</Text>
        </View>
        <View>
          <Slider
            style={style.progressBar}
            value={10}
            minimumValue={0}
            maximumValue={1}
            thumbTintColor={'#ffd369'}
            minimumTrackTintColor="#ffd369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => {}}
          />
          <View style={style.progressLevelDuration}>
            <Text style={style.progressLevelText}>00:00</Text>
            <Text style={style.progressLevelText}>00:00</Text>
          </View>
        </View>
        <View style={style.musicControlsContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-back-outline" size={35} color="#ffd369" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="pause-circle" size={75} color="#ffd369" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-back-outline" size={35} color="#ffd369" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.bottomContainer}>
        <View style={style.bottomIconWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#888888" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 16,
    borderTopColor: '#393e46',
    borderWidth: 1,
  },
  bottomIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  imageWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  elevation: {
    elevation: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: 'center',
    color: '#eeeeee',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  artistName: {
    fontSize: 16,
    fontWeight: '300',
  },
  progressBar: {
    width: 350,
    height: 40,
    marginTop: 45,
    flexDirection: 'row',
  },
  progressLevelDuration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLevelText: {
    color: '#fff',
    fontWeight: '500',
  },
  musicControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 15,
  },
});
