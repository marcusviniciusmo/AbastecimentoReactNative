import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText, routes } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';
import ButtonConfirm from '../../Components/ButtonConfirm';

const FiliaisNaoEmbarcadas: React.FC<NavigationProps> = ({ navigation }) => {
    const [numeroPedidoInput, setNumeroPedidoInput] = useState('');

    const cleanInputValue = ((input: any) => {
        input('');
    });

    const mostrarResultados = () => {
        navigation.navigate(routes.resultadosFiliaisNaoEmbarcadas, numeroPedidoInput)
    }

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.filiaisNaoEmbarcadas}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <Container>
                <Input
                    name='numero-pedido'
                    icon={featherIcons.hash}
                    placeholder={placeholder.numeroPedido}
                    onChangeText={setNumeroPedidoInput}
                    keyboardType={'numeric'}
                    iconRight={numeroPedidoInput ? featherIcons.x : ''}
                    cleanInput={cleanInputValue.bind(this, setNumeroPedidoInput)}
                    value={numeroPedidoInput}
                    bordered
                />
            </Container>
            {
                numeroPedidoInput
                    ? <ButtonConfirm onPress={mostrarResultados}>Buscar</ButtonConfirm>
                    : <TipBottomView text={tipText.informe_Todos_Campos} />
            }
        </ContainerPrincipal>
    )
};

export default FiliaisNaoEmbarcadas;