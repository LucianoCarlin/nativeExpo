import React from 'react'

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  Cards,
  Transaction,
  Title,
  List
} from './styles';
import { Card } from '../../components/Cards';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCards';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){

  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento",
      amount: "R$ 1,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: "11/11/2021",
    },
    {
      id: '2',
      type: 'negative',
      title: "Xis tudo",
      amount: "R$ 30,00",
      category: {
        name: 'Comer',
        icon: 'coffee',
      },
      date: "11/11/2021",
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel",
      amount: "R$ 1200,00",
      category: {
        name: 'Moradia',
        icon: 'shopping-bag',
      },
      date: "11/11/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/63309947?v=4'}}/>

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Luciano</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <Cards>
        <Card
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="bla"
        />

        <Card
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="bla bla"
        />

        <Card
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="bla bla bla"
        />
      </Cards>

      <Transaction>
        <Title>Lista</Title>

        <List
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </Transaction>

    </Container>
  )
}
