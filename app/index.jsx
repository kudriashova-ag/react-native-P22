import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Home</Text>
            <Link href="/about">About</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Index;
