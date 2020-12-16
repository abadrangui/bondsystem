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
  DateTimeInput,
  DateField,
} from "react-admin";
import { useFormState } from 'react-final-form';


// const PostFilter = (props: any) => {
//   return (<Filter {...props}>
//     <TextInput label="Хайлт хийх" source="bond" alwaysOn />
//   </Filter>);
// };

export const TradeList = (props: any) => (
  <List title="Арилжааны жагсаалт"
    {...props}
    // filters={<PostFilter />}
    exporter={false}>
    <Datagrid>
      <ReferenceField label="Үнэт цаас" source="bondId" reference="bond">
        <TextField source="symbol" />
      </ReferenceField>

      <DateField showTime label="Эхлэх огноо" source='start' />
      <DateField showTime label="Дуусах огноо" source='end' />
    </Datagrid>
  </List>
);

export const TradeShow = (props: any) => (
  <Show title="Арилжаа" {...props}>
    <SimpleShowLayout>
      <ReferenceField label="Үнэт цаас" source="bondId" reference="bond">
        <TextField source="symbol" />
      </ReferenceField>

      <DateField showTime label="Эхлэх огноо" source='start' />
      <DateField showTime label="Дуусах огноо" source='end' />
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

export const TradeCreate = (props: any) => (
  <Create title="Арилжаа" {...props}>
    <SimpleForm redirect="list">
      <ReferenceInput label="Үнэт цаас" source="bondId" reference="bond">
        <SelectInput
          optionText={(record: any) => {
            const { code, symbol, companyName, offeredPrice, offeredQuantity } = record
            return `${code} | ${symbol} | ${companyName} | Ширхэг:${offeredQuantity} | Үнэ:${offeredPrice}`
          }}
        />
      </ReferenceInput>

      <DateTimeInput label="Эхлэх огноо" source='start' />
      <DateTimeInput label="Дуусах огноо" source='end' />

    </SimpleForm>
  </Create>
);

export const TradeEdit = (props: any) => (
  <Edit title="Арилжаа" {...props}>
    <SimpleForm>
      <ReferenceInput label="Үнэт цаас" source="bondId" reference="bond">
        <SelectInput
          optionText={(record: any) => {
            const { code, symbol, companyName, offeredPrice, offeredQuantity } = record
            return `${code} | ${symbol} | ${companyName} | Ширхэг:${offeredQuantity} | Үнэ:${offeredPrice}`
          }}
        />
      </ReferenceInput>

      <DateTimeInput label="Эхлэх огноо" source='start' />
      <DateTimeInput label="Дуусах огноо" source='end' />
    </SimpleForm>
  </Edit>
);
