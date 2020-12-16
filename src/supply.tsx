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

export const SupplyList = (props: any) => (
  <List {...props} title="Нийлүүлэлт" exporter={false}>
    <Datagrid>
      <ReferenceField label="Үнэт цаас" source="bondId" reference="bond">
        <TextField source="symbol" />
      </ReferenceField>

      <ReferenceField label="Харилцагч" source="customerId" reference="customer">
        <TextField source="lastname" />
        {/* <TextField source="firstname" /> */}
      </ReferenceField>

      <NumberField source="ticketPrice" label="Нийлүүлэлтийн үнэ" />
      <TextField source="ticketQuantity" label="Нийлүүлэлтийн ширхэг" />

      <ShowButton label="Үзэх" />
      <EditButton label="Засах" />
      <DeleteButton label="Устгах" />
    </Datagrid>
  </List>
);

export const SupplyShow = (props: any) => (
  <Show title="Нийлүүлэлт"  {...props}>
    <SimpleShowLayout>

      <ReferenceField label="Үнэт цаас" source="bondId" reference="bond">
        <TextField source="symbol" />
      </ReferenceField>

      <ReferenceField label="Харилцагч" source="customerId" reference="customer">
        <TextField source="lastname" />
        {/* <TextField source="firstname" /> */}
      </ReferenceField>

      <NumberField source="ticketPrice" label="Нийлүүлэлтийн үнэ" />
      <TextField source="ticketQuantity" label="Нийлүүлэлтийн ширхэг" />

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

export const SupplyCreate = (props: any) => (
  <Create title="Нийлүүлэлт" {...props}>
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

      <NumberInput source="ticketPrice" label="Нийлүүлэлтийн үнэ" />
      <NumberInput source="ticketQuantity" label="Нийлүүлэлтийн ширхэг" />


    </SimpleForm>
  </Create>
);

export const SupplyEdit = (props: any) => (
  <Edit title="Нийлүүлэлт"  {...props}>
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

      <NumberInput source="ticketPrice" label="Нийлүүлэлтийн үнэ" />
      <NumberInput source="ticketQuantity" label="Нийлүүлэлтийн ширхэг" />

    </SimpleForm>
  </Edit>
);
