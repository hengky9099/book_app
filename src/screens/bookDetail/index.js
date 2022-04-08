import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import Share from 'react-native-share';
import notifikasi from '../../component/notification';
import NoInternetConnection from '../../component/NoInternetConnection';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {getDetailBookById} from '../home/redux/action';

const Index = ({navigation}) => {
  const {refreshing, loading, connection} = useSelector(state => state.global);
  const {detailBook} = useSelector(state => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    bookdetails();
  }, []);

  const rupiah = number => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const ShareOption = async () => {
    const shareOptions = {
      message: `Judul : "${detailBook.title}"
      Saya ingin merekomendasikan buku ini kepada anda.
      dengan harga "${detailBook.price}"`,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const bookdetails = async () => {
    dispatch(getDetailBookById());
  };

  const love = () => {
    notifikasi.configure();
    notifikasi.buatChannel('1');
    notifikasi.kirimNotifikasi(
      '1',
      'Notifikasi',
      `Anda telah menyukai buku ${detailBook.title}`,
    );
  };

  if (connection) {
    if (loading) {
      return (
        <View style={[styles.loadingContainer, styles.loadingHorizontal]}>
          <ActivityIndicator size="large" color="#0275d8" />
        </View>
      );
    } else {
      const price = rupiah(detailBook.price);
      return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} />}>
          <TouchableOpacity
            style={styles.backicon}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-left-circle" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.loveicon} onPress={love}>
            <Icon name="heart" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shareicon}
            onPress={ShareOption}
            title="Share">
            <Icon name="share-2" size={30} color="black" />
          </TouchableOpacity>

          <View style={styles.cardcontainer}>
            <FastImage
              style={styles.image}
              source={{uri: detailBook.cover_image}}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.text}>Title : {detailBook.title}</Text>
            <Text style={styles.text}>Author : {detailBook.author}</Text>
            <Text style={styles.text}>Publisher : {detailBook.publisher}</Text>
          </View>

          <View style={styles.rowview}>
            <View>
              <Text style={styles.textbold}>Rating</Text>
              <Text style={styles.rowtext}>{detailBook.average_rating}</Text>
            </View>
            <View>
              <Text style={styles.textbold}>Total Sale</Text>
              <Text style={styles.rowtext}>{detailBook.total_sale}</Text>
            </View>
            <TouchableOpacity style={styles.buy}>
              <Text style={styles.buttontext}>Buy {price}</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.overview}>Overview</Text>
            <Text style={styles.synopsis}>{detailBook.synopsis}</Text>
          </View>
        </ScrollView>
      );
    }
  } else {
    return <NoInternetConnection />;
  }
};
export default Index;

const styles = StyleSheet.create({
  image: {
    width: moderateScale(100),
    height: moderateScale(200),
    marginLeft: moderateScale(20),
  },
  cardcontainer: {
    backgroundColor: '#ffffff',
    width: moderateScale(300),
    height: moderateScale(200),
    marginTop: moderateScale(-10),
    marginLeft: moderateScale(30),
  },
  text: {
    left: moderateScale(130),
    top: moderateScale(-170),
    width: moderateScale(150),
    borderRadius: moderateScale(10),
  },
  buy: {
    backgroundColor: '#0275d8',
    width: moderateScale(120),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  buttontext: {
    color: 'white',
  },
  rowview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginTop: moderateScale(50),
    height: moderateScale(70),
  },
  rowtext: {
    textAlign: 'center',
  },
  overview: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    marginTop: moderateScale(30),
    marginLeft: moderateScale(20),
  },
  synopsis: {
    left: moderateScale(20),
    width: moderateScale(320),
    marginTop: moderateScale(10),
    height: moderateScale(350),
  },
  backicon: {
    left: moderateScale(20),
    top: moderateScale(20),
  },
  loveicon: {
    left: moderateScale(250),
    top: moderateScale(-10),
  },
  shareicon: {
    top: moderateScale(-40),
    left: moderateScale(300),
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
  textbold: {
    fontWeight: 'bold',
    color: 'black',
  },
});
