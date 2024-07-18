import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors, ImagesPath} from '../../../constants';
import {styles} from './styles';

const categoriesListData = [
  {
    id: '1',
    title: 'Adventure',
    image:
      'https://media.cntraveler.com/photos/5cae3933e8e7c8013e81ad51/16:9/w_1280,c_limit/Maui-City-Guide_GettyImages-157683040.jpg',
  },
  {
    id: '2',
    title: 'Culinary',
    image:
      'https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Napali_0_1.jpg?itok=S0scQXWt',
  },
  {
    id: '3',
    title: 'Eco-tourism',
    image:
      'https://cdn.britannica.com/44/91844-050-F248F634/beach-Waikiki-Honolulu-Oahu-Hawaii.jpg',
  },
];

const Surfing: React.FC = () => {
  const [categoriesList] = useState(categoriesListData);

  const renderCategoryListItem = ({item}) => (
    <TouchableOpacity style={styles.categoryListMainContainer}>
      <Text style={styles.categoryTitle}>{`${item.id}. ${item.title}`}</Text>
      <Image style={styles.topSpotsImage} source={{uri: item.image}} />
    </TouchableOpacity>
  );

  const renderTravelGuideCard = () => {
    return (
      <View style={styles.travelGuideCardContainer}>
        <View style={styles.travelGuideCardRowContainer}>
          <View>
            <Text
              style={[
                styles.hightlightTitle,
                {color: Colors.BLACK_LABEL_COLOR, marginStart: 0},
              ]}>
              {'Hadwin Malone'}
            </Text>
            <Text style={styles.categoryTitle}>{'Guide since 2012'}</Text>
          </View>
          <Image
            style={styles.avatarImage}
            source={{
              uri: 'https://as1.ftcdn.net/v2/jpg/05/79/02/70/1000_F_579027044_BUxLIpPfkkmDA4Ud4uCzaYF1IUQrg8C1.jpg',
            }}
          />
        </View>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactLabel}>{'Contact'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <ImageBackground
            style={styles.topImageBackgroundStyle}
            imageStyle={styles.topImageBackgroundImageStyle}
            source={ImagesPath.surfingBanner}>
            <View />
          </ImageBackground>
          <Text style={styles.hightlightShortDescription}>
            {
              'Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.'
            }
          </Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.highlightsLabel}>{'Top spots'}</Text>
            <FlatList
              style={{marginHorizontal: moderateScale(16)}}
              data={categoriesList}
              keyExtractor={item => item.id}
              renderItem={renderCategoryListItem}
              showsVerticalScrollIndicator={false}
            />
            <Text style={styles.highlightsLabel}>{'Travel Guide'}</Text>
            {renderTravelGuideCard()}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.bottomFixedButton}>
        <Text style={[styles.contactLabel, {color: Colors.WHITE}]}>
          {'Book a trip'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Surfing;
