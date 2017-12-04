import {StyleSheet} from 'react-native'

import {Colors} from '../../them/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
  },
  main: {
    paddingTop: 20,
  },
  wrapText: {

  },
  textIndent: {
    opacity: 0
  },
  text: {
    paddingBottom: 14,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 2
  },
  wrapBtn: {
    paddingBottom: 10,
    flexDirection: 'column'
  },
  btn: {
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    overflow: 'hidden',


    backgroundColor: '#E3D9CA',
    borderRadius: 4,
  },
  btnText: {
    fontSize: 16,
    color: '#363333',
    textAlign: 'center',
    lineHeight: 36,
  }
})