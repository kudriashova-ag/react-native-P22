import { Button as ButtonRN, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './src/ui/components/Button/Button';



export default function App() {
  const handlePress = () => {
    alert('You clicked the button!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My App</Text>
      <ButtonRN title='Click me' onPress={handlePress} color='red' disabled />

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        hitSlop={20}
      >
        <Text style={{color: 'white'}}>Press me</Text>
      </Pressable>


      <Button text='Click me' onPress={handlePress} />



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: 'dodgerblue',
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.6,
  }
});
