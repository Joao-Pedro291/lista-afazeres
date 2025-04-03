import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function Index() {
    const roteador = useRouter();
    const [valor01, setvalor01] = useState('');
    const [valor02, setvalor02] = useState('');
    const [resultado, setresultado] = useState('');

    function mostrarNome() {
        const idade = parseInt(valor02, 10); // Convertendo para número
        if (idade >= 18) {
            setresultado("Olá " + valor01 + ", você pode ser preso.");
        } else {
            setresultado("Olá " + valor01 + ", você está no beta test ainda.");
        }
    }

    function vaiPraSobre() {
        roteador.push('/sobre');
    }

    return (
        <View style={styles.container}>
            <Text>Nome:</Text>
            <TextInput
                placeholder='Nome'
                keyboardType='default'
                value={valor01}
                onChangeText={setvalor01}
                style={styles.input}
            />

            <Text>Idade:</Text>
            <TextInput
                placeholder='Idade'
                keyboardType='numeric'
                value={valor02}
                onChangeText={setvalor02}
                style={styles.input}
            />

            <Button title='Salvar' onPress={mostrarNome} />

            <TextInput
                keyboardType='default'
                value={resultado}
                onChangeText={setresultado}
                style={styles.input}
            />

            <Button title='Sobre' onPress={vaiPraSobre} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // Changed to column to stack elements vertically
        justifyContent: 'center', // Center elements vertically
        alignItems: 'center', // Center elements horizontally
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        width: '80%', // Sets input width to 80% of the container's width
    },
});
