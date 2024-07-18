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

import {styles} from './styles';
import {Colors, ImagesPath} from '../../../constants';

const listData = [
  {
    id: '1',
    image:
      'https://i.abcnewsfe.com/a/3b3f4b5c-e6b7-4152-a314-165f7b5c710f/230531_ntl_hawaii_surf_1254_hpMain_16x9.jpg',
    title: 'Surfing',
    shortDescription: 'Best Hawaiian islands for surfing.',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKHyo6c9CA_tHbFbbi31TXZgsbvnEXYJRuw&s',
    title: 'Hula',
    shortDescription: 'Try it yourself.',
  },
  {
    id: '3',
    image:
      'https://cdn.britannica.com/30/153430-050-967CBF40/Eruption-Kilauea-Hawaii-Volcanoes-National-Park-1983.jpg',
    title: 'Vulcanoes',
    shortDescription: 'Volcanic conditions can change at any time.',
  },
];

const categoriesListData = [
  {
    id: '1',
    title: 'Adventure',
  },
  {
    id: '2',
    title: 'Culinary',
  },
  {
    id: '3',
    title: 'Eco-tourism',
  },
  {
    id: '4',
    title: 'Family',
  },
  {
    id: '5',
    title: 'Sport',
  },
];

const Home: React.FC = () => {
  const [highlightsListData] = useState(listData);
  const [categoriesList] = useState(categoriesListData);

  const imageURL =
    'https://content.api.news/v3/images/bin/ded3be00f6965dcfa60d91c42563592d';

  const renderHighlightItem = ({item}) => (
    <View style={styles.highlightItemMainContainer}>
      <Image style={styles.hightlightImage} source={{uri: item.image}} />
      <Text style={styles.hightlightTitle}>{item.title}</Text>
      <Text style={styles.hightlightShortDescription}>
        {item.shortDescription}
      </Text>
      <TouchableOpacity style={styles.arrowButtonContainer}>
        <Icon
          name="arrow-right"
          color={Colors.HIGHLIGHT_TITLE_COLOR}
          size={moderateScale(16)}
        />
      </TouchableOpacity>
    </View>
  );

  const renderCategoryListItem = ({item}) => (
    <TouchableOpacity style={styles.categoryListMainContainer}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <Icon
        name="arrow-right"
        color={Colors.HIGHLIGHT_TITLE_COLOR}
        size={moderateScale(16)}
      />
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
            source={ImagesPath.homeBanner}>
            <View />
          </ImageBackground>
          <Text style={styles.highlightsLabel}>{'Highlights'}</Text>
          <FlatList
            style={{flexGrow: 0, marginHorizontal: moderateScale(8)}}
            data={highlightsListData}
            keyExtractor={item => item.id}
            renderItem={renderHighlightItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.highlightsLabel}>{'Catergories'}</Text>
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

export default Home;
