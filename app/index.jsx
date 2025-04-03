import { useRouter } from 'expo-router';
import { Button, Text, View, Image } from 'react-native';

export default function Index() {
  const roteador = useRouter();

  function vaiPraBatata() {
    roteador.push('/batata');
  }

  function abreLista() {
    roteador.push('/afazeres')
  }

  return (
    <View>
      <Text>Esnupi</Text>
      <Text>Garfel</Text>
      <Button title="Vamos pra batata" onPress={vaiPraBatata} />
      <Button title='Lista de afazeres' onPress={abreLista} />
      <Image source={require('../assets/images/chave.jpg')} />
    </View>
  );
}