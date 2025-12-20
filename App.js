import { Button as ButtonRN, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './src/ui/components/Button/Button';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Separator from './src/ui/components/Separator/Separator';


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
        <Text style={{ color: 'white' }}>Press me</Text>
      </Pressable>

      <Separator size={20} />

      <Button
        text='Click me'
        onPress={handlePress}
        variant='danger'
        disabled={false}
        icon={<EvilIcons name="arrow-right" size={30} color="white" />}
        style={{ alignSelf: 'flex-start' }}
      />
      <Separator size={20} />

      <Image
        source={{ uri: 'https://mukachevo.net/uploads/media/images/image/d5/61/d5613d3f9a154db9997217308c5d3cebfsvnk8674igerxe_image.jpg' }}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={require('./assets/favicon.png')}
        style={{ width: 200, height: 100 }}
        resizeMode='cover'
        accessibilityLabel='Icon'
      />

      <ImageBackground
        source={{ uri: 'https://mukachevo.net/uploads/media/images/image/d5/61/d5613d3f9a154db9997217308c5d3cebfsvnk8674igerxe_image.jpg' }}
        style={{ width: '100%', height: 50 }}
      >
        <Text>Hello</Text>
      </ImageBackground>



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
