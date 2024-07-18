import {Dimensions, StyleSheet} from 'react-native';

//Third party libraries
import {moderateScale} from 'react-native-size-matters';

//Custom imports
import {Colors} from '../../constants';
import { FontFamily } from '../../constants/FontFamilyList';

export const styles = StyleSheet.create({
  mainContainer: {
    height: moderateScale(44),
    width: Dimensions.get('window').width/2.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.BUTTON_COLOR,
    borderRadius: moderateScale(44),
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: FontFamily.JOSEFIN_SANS_REGULAR,
    color: Colors.BUTTON_LABEL,
  },
});
