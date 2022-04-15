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
import {getDetailBookById, getRecommended} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import NoInternetConnection from '../../component/NoInternetConnection';

const Index = ({navigation}) => {
  const {recommendeds} = useSelector(state => state.home);
  const {refreshing, loading, connection} = useSelector(state => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    recommended();
  });

  const recommended = async () => {
    dispatch(getRecommended());
  };

  const getBookById = item => {
    dispatch(getDetailBookById(item.id));
  };

  const topRatedBook = recommendeds
    .sort(function (a, b) {
      return b.average_rating - a.average_rating;
    })
    .slice(0, 6);

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
          <FlatList
            ListHeaderComponent={
              <View>
                <Text style={styles.greeting}>Good Morning, Hengky!</Text>
                <Text style={styles.recommended}>Recommended</Text>
                <FlatList
                  refreshControl={<RefreshControl refreshing={refreshing} />}
                  keyExtractor={item => item.id}
                  data={recommendeds}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress={() => getBookById(item)}>
                      <View style={styles.horizontalContainer}>
                        <FastImage
                          style={styles.image}
                          source={{uri: item.cover_image}}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                        {/* <Text style={styles.text}>
                    Rating : {item.average_rating}
                  </Text> */}
                      </View>
                    </TouchableOpacity>
                  )}
                  horizontal={true}
                />
                <Text style={styles.popular}>Popular Book</Text>
              </View>
            }
            refreshControl={<RefreshControl refreshing={refreshing} />}
            keyExtractor={item => item.id}
            numColumns={3}
            data={topRatedBook}
            horizontal={false}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => getBookById(item)}>
                <View style={styles.verticalContainer}>
                  <FastImage
                    style={styles.image2}
                    source={{uri: item.cover_image}}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <Text style={styles.text}>Title : {item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  } else {
    return <NoInternetConnection onCheck={dispatch(NoInternetConnection())} />;
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
    top: moderateScale(-40),
    left: moderateScale(20),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(25),
  },
  image: {
    width: moderateScale(90),
    height: moderateScale(110),
    left: moderateScale(-10),
    // marginLeft: moderateScale(0),
    top: moderateScale(-5),
  },
  horizontalContainer: {
    marginTop: moderateScale(80),
    marginLeft: moderateScale(10),
    left: moderateScale(20),
    // backgroundColor: 'white',
    height: moderateScale(170),
    width: moderateScale(90),
  },
  verticalContainer: {
    width: moderateScale(100),
    height: moderateScale(220),
    top: moderateScale(-50),
    left: moderateScale(10),
    marginLeft: moderateScale(10),
    marginBottom: moderateScale(20),
    backgroundColor: 'white',
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
  text: {
    textAlign: 'center',
    top: moderateScale(20),
  },
  image2: {
    width: moderateScale(120),
    height: moderateScale(120),
    top: moderateScale(10),
    right: moderateScale(10),
  },
});
