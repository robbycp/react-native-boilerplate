import React from 'react';
import {FlatList, View} from 'react-native';
import {
  Button,
  Card,
  Paragraph,
  Text,
  Title,
  useTheme,
} from 'react-native-paper';

import TextInputCustom from '~/components/basic/Form/TextInput';

export interface Todo {
  _id: string;
  description: string;
}

interface Props {
  formTodo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleSubmitTodo: () => void;
  setFormTodo: React.Dispatch<React.SetStateAction<Todo>>;
  todos: Todo[];
}

const TabCrudView = ({
  formTodo,
  handleDeleteTodo,
  handleSubmitTodo,
  setFormTodo,
  todos,
}: Props) => {
  const theme = useTheme();
  return (
    <View>
      <View>
        <TextInputCustom
          nativeTextInputProps={{
            label: 'Description',
            onChangeText: text =>
              setFormTodo({
                ...formTodo,
                description: text,
              }),
            value: formTodo.description,
          }}
        />
        <Button onPress={handleSubmitTodo}>
          <Text>{formTodo._id ? 'Edit' : 'Add'}</Text>
        </Button>
      </View>
      <Title>List of Todo</Title>
      <View>
        <FlatList
          data={todos}
          keyExtractor={item => `${item._id}`}
          renderItem={({item}) => (
            <Card mode="elevated" style={theme.spacing.mb8}>
              <Card.Title title={`ID : ${item._id}`} />
              <Card.Content>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  color={theme.colors.error}
                  onPress={() => handleDeleteTodo(item._id)}>
                  Delete
                </Button>
                <Button onPress={() => setFormTodo(item)}>Update</Button>
              </Card.Actions>
            </Card>
          )}
        />
      </View>
    </View>
  );
};

export default TabCrudView;
