import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Option } from '../Option';
import { styles } from './styles';

export function Copyright() {
  return (
    <View >
      <Text style={styles.text}>
        Feito com ♥ na NLW Return
      </Text>
    </View>
  );
}