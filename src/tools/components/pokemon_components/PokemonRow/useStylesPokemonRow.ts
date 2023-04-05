import { Theme } from '~app_contexts/theme/theme';
import { StyleSheet } from 'react-native';

interface StyleProps {
   theme: Theme;
   backgroundColor: string;
   color: string;
}

const useStylesPokemonRow = ({ theme, backgroundColor, color }: StyleProps) =>
   StyleSheet.create({
      container: {
         backgroundColor: backgroundColor,
         display: 'flex',
         flexDirection: 'row',
         alignSelf: 'stretch',
         borderRadius: 8,
         padding: 6,
         paddingLeft: 10
      },
      info: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'space-between',
         flex: 1
      },
      infoTop: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignSelf: 'stretch'
      },
      infoTopText: {
         display: 'flex',
         flexDirection: 'row'
      },
      infoTopTypes: {
         display: 'flex',
         flexDirection: 'row'
      },
      icon: {
         marginLeft: 4
      },
      infoBottom: {
         alignSelf: 'stretch',
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'
      },
      addCatchListButton: {
         height: 30,
         width: 30,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: color,
         borderRadius: 200
      },
      bodyText: {
         color: color,
         fontSize: 14,
         letterSpacing: 0.5,
         lineHeight: 28,
         fontWeight: '500'
      },
      title: {
         textTransform: 'capitalize',
         marginLeft: 6
      },
      spriteContainer: {
         marginLeft: 12
      }
   });

export default useStylesPokemonRow;
