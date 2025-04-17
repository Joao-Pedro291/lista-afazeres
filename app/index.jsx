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

  function abreCEP() {
    roteador.push('/cep')
  }

  return (
    <View>
      <Text>Esnupi</Text>
      <Text>Garfel</Text>
      <Button title="Vamos pra batata" onPress={vaiPraBatata} />
      <Button title='Lista de afazeres' onPress={abreLista} />
      <Button title='Tela de CEP' onPress={abreCEP} />
      <Image source={require('../assets/images/chave.jpg')} />
    </View>
  );
}