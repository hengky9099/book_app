import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';
import {SetRecommendeds} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {SetRefreshing, SetLoading} from '../../store/actionGlobal';
import NoInternetConnection from '../../component/NoInternetConnection';

const Index = ({navigation}) => {
  const {recommendeds} = useSelector(state => state.home);
  const {refreshing, loading, connection} = useSelector(state => state.global);
  const {token} = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    recommended();
  }, []);

  const recommended = async () => {
    try {
      const res = await axios.get(`http://code.aldipee.com/api/v1/books`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjQ3ZDAxOTIyNTM2YzdmYzdmZjdhMTciLCJpYXQiOjE2NDkwODUxMTQsImV4cCI6MTY0OTA4NjkxNCwidHlwZSI6ImFjY2VzcyJ9.ddF2eoVK73356kn3VG7z_aal2QeMpOWC44YfV5sOveg`,
        }, //${token}
      });
      dispatch(SetLoading(true));
      dispatch(SetRefreshing(true));
      dispatch(SetRecommendeds(res.data.results));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(SetRefreshing(false));
      dispatch(SetLoading(false));
    }
  };

  if (connection) {
    if (loading) {
      return (
        <View style={[styles.loadingContainer, styles.loadingHorizontal]}>
          <ActivityIndicator size="large" color="#0275d8" />
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.greeting}>Good Morning, Hengky!</Text>
          <Text style={styles.recommended}>Recommended</Text>
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} />}
            keyExtractor={item => item.id}
            data={recommendeds}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BookDetail', {datas: item.id})
                }>
                <View style={styles.horizontalContainer}>
                  <FastImage
                    style={styles.image}
                    source={{uri: item.cover_image}}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <Text style={styles.text}>
                    Rating : {item.average_rating}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            horizontal={true}
          />
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} />}
            keyExtractor={item => item.id}
            data={recommendeds}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BookDetail', {datas: item.id})
                }>
                <View style={styles.verticalContainer}>
                  <FastImage
                    style={styles.image}
                    source={{uri: item.cover_image}}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <Text style={styles.text}>
                    Rating : {item.average_rating}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.popular}>Popular Book</Text>
        </View>
      );
    }
  } else {
    <NoInternetConnection />;
  }
};

export default Index;

const styles = StyleSheet.create({
  greeting: {
    fontSize: moderateScale(16),
    top: moderateScale(40),
    left: moderateScale(20),
    color: 'black',
  },
  recommended: {
    fontSize: moderateScale(14),
    top: moderateScale(60),
    left: moderateScale(20),
  },
  popular: {
    fontSize: moderateScale(14),
    top: moderateScale(25),
    left: moderateScale(20),
  },
  // kotak2: {
  //   width: moderateScale(100),
  //   height: moderateScale(200),
  //   backgroundColor: 'black',
  //   top: moderateScale(40),
  //   marginLeft: moderateScale(20)
  // },
  image: {
    width: moderateScale(100),
    height: moderateScale(200),
    marginLeft: moderateScale(0),
    top: moderateScale(-28),
  },
  horizontalContainer: {
    marginTop: moderateScale(80),
    marginLeft: moderateScale(20),
    backgroundColor: 'white',
  },
  verticalContainer: {
    width: moderateScale(100),
    height: moderateScale(150),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loadingHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
