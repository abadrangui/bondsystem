// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  // DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  NumberInput,
  NumberField,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const PostFilter = (props: any) => {
  return (<Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>);
};

export const CustomerList = (props: any) => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="lastname" label="Овог" />
      <TextField source="firstname" label="Нэр" />
      <TextField source="companyName" label="Компаний нэр" />
      <TextField source="regNo" label="Регистрийн дугаа" />
      <TextField source="accountName" label="Дансны нэр" />
      <NumberField source="accountNumber" label="Дансны дугаар" />
    </Datagrid>
  </List>
);

export const CustomerShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="lastname" label="Овог" />
      <TextField source="firstname" label="Нэр" />
      <TextField source="companyName" label="Компаний нэр" />
      <TextField source="regNo" label="Регистрийн дугаа" />
      <TextField source="accountName" label="Дансны нэр" />
      <NumberField source="accountNumber" label="Дансны дугаар" />
    </SimpleShowLayout>
  </Show>
);

export const CustomerCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="lastname" label="Овог" />
      <TextInput source="firstname" label="Нэр" />
      <TextInput source="companyName" label="Компаний нэр" />
      <TextInput source="regNo" label="Регистрийн дугаа" />
      <TextInput source="accountName" label="Дансны нэр" />
      <NumberInput source="accountNumber" label="Дансны дугаар" />
    </SimpleForm>
  </Create>
);

export const CustomerEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="lastname" label="Овог" />
      <TextInput source="firstname" label="Нэр" />
      <TextInput source="companyName" label="Компаний нэр" />
      <TextInput source="regNo" label="Регистрийн дугаа" />
      <TextInput source="accountName" label="Дансны нэр" />
      <NumberInput source="accountNumber" label="Дансны дугаар" />
    </SimpleForm>
  </Edit>
);
