// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
  NumberInput,
  NumberField,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  Filter,
  TextInput,

} from "react-admin";
import { useFormState } from 'react-final-form';


const PostFilter = (props: any) => {
  return (<Filter {...props}>
    <TextInput label="Хайлт хийх" source="title" alwaysOn />
  </Filter>);
};

export const TicketList = (props: any) => (
  <List title="Захиалгын жагсаалт"  {...props} exporter={false}>
    <Datagrid>
      <ReferenceField label="Үнэт цаас" source="bondId" reference="bond">
        <TextField source="symbol" />
      </ReferenceField>

      <ReferenceField label="Үнэт цаас" source="bondId" reference="bond">
        <TextField source="companyName" />
      </ReferenceField>

      <ReferenceField label="Харилцагч" source="customerId" reference="customer">
        <TextField source="lastname" />
        {/* <TextField source="firstname" /> */}
      </ReferenceField>

      <NumberField source="ticketPrice" label="Захиалгын үнэ" />
      <TextField source="ticketQuantity" label="Захиалгын ширхэг" />

      <ShowButton label="Үзэх" />
      <EditButton label="Засах" />
      <DeleteButton label="Устгах" />
    </Datagrid>
  </List>
);

export const TicketShow = (props: any) => (
  <Show title="Захиалга" {...props}>
    <SimpleShowLayout>

      <ReferenceField label="Үнэт цаас" source="bondId" reference="bond">
        <TextField source="symbol" />
      </ReferenceField>

      <ReferenceField label="Харилцагч" source="customerId" reference="customer">
        <TextField source="lastname" />
        {/* <TextField source="firstname" /> */}
      </ReferenceField>

      <NumberField source="ticketPrice" label="Захиалгын үнэ" />
      <TextField source="ticketQuantity" label="Захиалгын ширхэг" />
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

export const TicketCreate = (props: any) => (
  <Create title="Захиалга" {...props}>
    <SimpleForm redirect="list">
      <ReferenceInput label="Үнэт цаас" source="bondId" reference="bond">
        <SelectInput
          optionText={(record: any) => {
            const { code, symbol, companyName, offeredPrice, offeredQuantity } = record
            return `${code} | ${symbol} | ${companyName} | Ширхэг:${offeredQuantity} | Үнэ:${offeredPrice}`
          }}
        />
      </ReferenceInput>

      <ReferenceInput label="Харилцагч" source="customerId" reference="customer">
        <SelectInput
          optionText={(record: any) => {
            const { lastname, firstname } = record
            return `${lastname} овогтой ${firstname} `
          }}
        />
      </ReferenceInput>

      <NumberInput source="ticketPrice" label="Захиалгын үнэ" />
      <NumberInput source="ticketQuantity" label="Захиалгын ширхэг" />


    </SimpleForm>
  </Create>
);

export const TicketEdit = (props: any) => (
  <Edit title="Захиалга" {...props}>
    <SimpleForm>
      <ReferenceInput label="Үнэт цаас" source="bondId" reference="bond">
        <SelectInput
          optionText={(record: any) => {
            const { code, symbol, companyName, offeredPrice, offeredQuantity } = record
            return `${code} | ${symbol} | ${companyName} | Ширхэг:${offeredQuantity} | Үнэ:${offeredPrice}`
          }}
        />
      </ReferenceInput>

      <ReferenceInput label="Харилцагч" source="customerId" reference="customer">
        <SelectInput
          optionText={(record: any) => {
            const { lastname, firstname } = record
            return `${lastname} овогтой ${firstname} `
          }}
        />
      </ReferenceInput>

      <NumberInput source="ticketPrice" label="Захиалгын үнэ" />
      <NumberInput source="ticketQuantity" label="Захиалгын ширхэг" />

    </SimpleForm>
  </Edit>
);
