import {Dimensions, StyleSheet} from 'react-native';

//Third party libraries

//Custom imports
import {Colors} from '../../../constants';
import {FontFamily} from '../../../constants/FontFamilyList';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  topImageBackgroundImageStyle: {
    height: moderateScale(240),
    width: '100%',
  },
  topImageBackgroundStyle: {
    height: moderateScale(240),
  },
  highlightsLabel: {
    fontFamily: FontFamily.IBM_PLEX_MONO_BOLD_700,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
    color: Colors.BLACK_LABEL_COLOR,
    marginTop: moderateScale(24),
    marginStart: moderateScale(16),
  },
  highlightItemMainContainer: {
    width: Dimensions.get('window').width / 1.2,
    height: 'auto',
    borderTopStartRadius: moderateScale(8),
    borderTopEndRadius: moderateScale(8),
    marginHorizontal: moderateScale(8),
    marginTop: moderateScale(16),
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: moderateScale(24),
  },
  hightlightImage: {
    borderTopStartRadius: moderateScale(8),
    borderTopEndRadius: moderateScale(8),
    width: '100%',
    height: moderateScale(170),
  },
  hightlightTitle: {
    fontFamily: FontFamily.IBM_PLEX_MONO_BOLD_700,
    fontSize: moderateScale(24),
    lineHeight: moderateScale(24),
    color: Colors.HIGHLIGHT_TITLE_COLOR,
    marginTop: moderateScale(16),
    marginStart: moderateScale(24),
  },
  hightlightShortDescription: {
    fontFamily: FontFamily.IBM_PLEX_MONO_REGULAR_400,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
    color: Colors.BLACK_LABEL_COLOR,
    marginVertical: moderateScale(32),
    marginHorizontal: moderateScale(16),
  },
  arrowButtonContainer: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(40),
    backgroundColor: Colors.ROUND_BUTTON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(24),
    alignSelf: 'flex-end',
    marginTop: moderateScale(8),
    marginBottom: moderateScale(16),
    overflow: 'hidden',
  },
  bottomContainer: {
    backgroundColor: Colors.ROUND_BUTTON_COLOR,
    flex: 1,
    paddingBottom: moderateScale(60),
  },
  categoryListMainContainer: {
    marginHorizontal: moderateScale(16),
    marginVertical: moderateScale(4),
    marginTop: moderateScale(16),
    height: moderateScale(63),
    paddingStart: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    backgroundColor: Colors.WHITE,
  },
  categoryTitle: {
    fontFamily: FontFamily.IBM_PLEX_MONO_BOLD_700,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
    color: Colors.HIGHLIGHT_TITLE_COLOR,
  },
  travelGuideCardContainer: {
    marginHorizontal: moderateScale(16),
    marginVertical: moderateScale(16),
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(8),
    padding: moderateScale(16),
  },
  travelGuideCardRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarImage: {
    height: moderateScale(74),
    width: moderateScale(74),
    borderRadius: moderateScale(74),
  },
  contactButton: {
    height: moderateScale(40),
    width: moderateScale(116),
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(1),
    borderColor: Colors.HIGHLIGHT_TITLE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(16),
  },
  contactLabel: {
    fontFamily: FontFamily.IBM_PLEX_MONO_BOLD_700,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
    color: Colors.HIGHLIGHT_TITLE_COLOR,
  },
  bottomFixedButton: {
    height: moderateScale(40),
    width: '90%',
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.HIGHLIGHT_TITLE_COLOR,
    marginTop: moderateScale(16),
    position: 'absolute',
    bottom: moderateScale(16),
    alignSelf: 'center',
  },
  topSpotsImage: {
    height: moderateScale(63),
    borderTopEndRadius: moderateScale(8),
    borderBottomEndRadius: moderateScale(8),
    width: moderateScale(120),
  },
});
