import { useState } from "react";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native"

export default function cep() {

    const [cep, setCep] = useState("")
    const [dadosDoCep, setDadosDoCep] = useState(null);
    const [carregando, setCarregando] = useState(false);

    async function carregaCep() {
        if (cep.length !== 8) {
            setCep("CEP inválido");
            return;
        }

        // informar que estou carregando os dados
        setCarregando(true);

        // carregar dados da minha API
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(
                resposta => resposta.json()
            )
            .then(
                dadosEmJson => {
                    if (dadosEmJson.erro) {
                        setCep("Falha ao consultar API");
                        setDadosDoCep(null);
                        setCarregando(false);
                        return;
                    } else {
                        setDadosDoCep(dadosEmJson);
                        setCarregando(false);
                    }
                }
            )

    }

    return (
        <View>
            <Text>Digite um cep</Text>

            <TextInput
                value={cep}
                onChangeText={setCep}
                keyboardType="numeric"
                maxLength={8}
            />

            <Button title="Consultar"
                onPress={carregaCep}
            />

            {
                carregando &&
                <ActivityIndicator size="large" />
            }

            {
                dadosDoCep &&
                <View>
                    <Text>Endereço: {dadosDoCep.logradouro}</Text>
                    <Text>Bairro: {dadosDoCep.bairro}</Text>
                    <Text>Cidade: {dadosDoCep.localidade}</Text>
                </View>
            }

        </View>
    );

}