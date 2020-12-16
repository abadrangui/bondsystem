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
    <TextInput label="Нэрээр хайх" source="lastname" alwaysOn />
  </Filter>);
};

export const CustomerList = (props: any) => (
  <List title="Харилцагчийн жагсаалт" {...props} filters={<PostFilter />} exporter={false}>
    <Datagrid>
      <TextField source="lastname" label="Овог" />
      <TextField source="firstname" label="Нэр" />
      <TextField source="regNo" label="Регистрийн дугаар" />
      <TextField source="companyName" label="Компаний нэр" />


      <ShowButton label="Үзэх" />
      <EditButton label="Засах" />
      <DeleteButton label="Устгах" />
    </Datagrid>
  </List>
);

export const CustomerShow = (props: any) => (
  <Show title="Харилцагч" {...props}>
    <SimpleShowLayout>
      <TextField source="lastname" label="Овог" />
      <TextField source="firstname" label="Нэр" />
      <TextField source="regNo" label="Регистрийн дугаар" />
      <TextField source="companyName" label="Компаний нэр" />
    </SimpleShowLayout>
  </Show>
);

export const CustomerCreate = (props: any) => (
  <Create title="Харилцагч" {...props}>
    <SimpleForm redirect="list">
      <TextInput source="lastname" label="Овог" />
      <TextInput source="firstname" label="Нэр" />
      <TextInput source="regNo" label="Регистрийн дугаар" />
      <TextInput source="companyName" label="Компаний нэр" />
    </SimpleForm>
  </Create>
);

export const CustomerEdit = (props: any) => (
  <Edit title="Харилцагч" {...props}>
    <SimpleForm>
      <TextInput source="lastname" label="Овог" />
      <TextInput source="firstname" label="Нэр" />
      <TextInput source="regNo" label="Регистрийн дугаар" />
      <TextInput source="companyName" label="Компаний нэр" />
    </SimpleForm>
  </Edit>
);
