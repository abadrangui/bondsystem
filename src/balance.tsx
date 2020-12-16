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
  NumberInput,
  NumberField,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  SelectField,
} from "react-admin";
import { useFormState } from 'react-final-form';


const PostFilter = (props: any) => {
  return (<Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>);
};

export const BalanceList = (props: any) => (
  <List title="Үлдэгдэл шалгах"  {...props} exporter={false}>
    <Datagrid>
      <ReferenceField label="Харилцагч" source="customerId" reference="customer">
        <TextField source="lastname" />
        {/* <TextField source="firstname" /> */}
      </ReferenceField>
      <TextField source="accountName" label="Дансны нэр" />
      <TextField source="accountNumber" label="Дансны дугаар" />
      <NumberField source="balance" label="Дансны үлдэгдэл" />

      <ShowButton label="Үзэх" />
      <EditButton label="Засах" />
      <DeleteButton label="Устгах" />
    </Datagrid>
  </List>
);

export const BalanceShow = (props: any) => (
  <Show title="Үлдэглэл" {...props}>
    <SimpleShowLayout>

      <ReferenceField label="Харилцагч" source="customerId" reference="customer">
        <TextField source="lastname" />
        {/* <TextField source="firstname" /> */}
      </ReferenceField>
      <TextField source="accountName" label="Дансны нэр" />
      <TextField source="accountNumber" label="Дансны дугаар" />
      <NumberField source="balance" label="Дансны үлдэгдэл" />
    </SimpleShowLayout>
  </Show>
);

const BondData = (props: any) => {
  const { values } = useFormState();
  return (
    <>
      {console.log('vlaues ', values)}
    </>
  );
};

export const BalanceCreate = (props: any) => (
  <Create title="Үлдэглэл" {...props}>
    <SimpleForm redirect="list">

      <ReferenceInput label="Харилцагч" source="customerId" reference="customer">
        <SelectInput
          optionText={(record: any) => {
            const { lastname, firstname } = record
            return `${lastname} овогтой ${firstname} `
          }}
        />
      </ReferenceInput>
      <TextInput source="accountName" label="Дансны нэр" />
      <NumberInput source="accountNumber" label="Дансны дугаар" />
      <NumberInput source="balance" label="Дансны үлдэгдэл" />
    </SimpleForm>
  </Create>
);

export const BalanceEdit = (props: any) => (
  <Edit title="Үлдэглэл" {...props}>
    <SimpleForm>

      <ReferenceInput label="Харилцагч" source="customerId" reference="customer">
        <SelectInput
          optionText={(record: any) => {
            const { lastname, firstname } = record
            return `${lastname} овогтой ${firstname} `
          }}
        />
      </ReferenceInput>
      <TextInput source="accountName" label="Дансны нэр" />
      <NumberInput source="accountNumber" label="Дансны дугаар" />
      <NumberInput source="balance" label="Дансны үлдэгдэл" />
    </SimpleForm>
  </Edit>
);
