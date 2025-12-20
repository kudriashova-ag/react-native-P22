import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles';

const Button = ({ text, onPress }) => {
    return <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            styles.base
        ]}
    >
        <Text>{text}</Text>
    </Pressable>;
}



export default Button;
