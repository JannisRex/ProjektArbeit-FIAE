import { StyleSheet, TextStyle } from 'react-native'
import theme from '../../config/theme.style'

const styles: any = StyleSheet.create({
  errorHeader: {
    fontFamily: 'lato_lightitalic',
    fontSize: theme.FONT_SIZE_LARGE,
    fontStyle: 'normal',
    fontWeight: theme.FONT_WEIGHT_THIN,
    color: theme.ERROR_HEADER,
    textAlign: 'center'
  } as TextStyle,
  errorInfo: {
    fontFamily: 'lato_hairline',
    fontSize: theme.FONT_SIZE_SMALL,
    fontStyle: 'normal',
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.ERROR_TEXT,
    paddingVertical: 10
  } as TextStyle,
  errorContainer: {
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: theme.ERROR_BACKGROUND
  } as TextStyle
})

export default styles
