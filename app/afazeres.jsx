import { useState } from 'react';
import { Text, View, TextInput, FlatList, Button, Image } from 'react-native'
import { listaDeAfazeres } from '../dados/afazeres';

export default function Index() {


    const [nomeDaTarefa, setNomeDaTarefa] = useState();

    const [afazeres, setAfazares] = useState(
        listaDeAfazeres.sort(
            (a, b) => b.id - a.id
        )
    );

    const layoutDoItem = ({ item }) => (

        <View>
            <Text>{item.title}</Text>
            <Button title='X' />
        </View>
    );

    const adicionarAfazeres = () => {
        if (nomeDaTarefa.trim()) {
            const newId = listaDeAfazeres.length > 0 ? afazeres[0].id + 1 : 0;

            

            setAfazares(
                [
                    { id: newId, title: nomeDaTarefa, completed: false },
                    ...afazeres]
            );

            setNomeDaTarefa('');
        }
    }

    return (
        <View>
            <TextInput
                placeholder='Digite uma tarefa'
                placeholderTextColor={'gray'}
                value={nomeDaTarefa}
                onChangeText={setNomeDaTarefa} />
            <Button title='Registrar' onPress={adicionarAfazeres} />
            <FlatList
                data={afazeres}
                renderItem={layoutDoItem}
            />
        </View>
    );
}
