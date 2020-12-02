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

export const TicketList = (props: any) => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <ReferenceField label="Үнэт цаас" source="bondId" reference="bond">
        <TextField source="symbol" />
      </ReferenceField>

      <ReferenceField label="Харилцагч" source="customerId" reference="customer">
        <TextField source="lastname" />
        {/* <TextField source="firstname" /> */}
      </ReferenceField>

      <NumberField source="ticketPrice" label="Захиалгын үнэ" />
      <NumberField source="ticketQuantity" label="Захиалгын ширхэг" />

      <ShowButton label="Үзэх" />
      <EditButton label="Засах" />
      <DeleteButton label="Устгах" />
    </Datagrid>
  </List>
);

export const TicketShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="code" label="Код" />
      <TextField source="symbol" label="Симбол" />
      <TextField source="companyName" label="Компаний нэр" />
      <TextField source="companyType" label="Компаний ангилал" />
      <NumberField source="quantity" label="Нийт хувьцааны т.ш." />
      <NumberField source="offeredPrice" label="Санал болгосон үнэ" />
      <NumberField source="offeredQuantity" label="Санал болгосон ширхэ" />
      <NumberField source="govQuantity" label="Төрийн эзэмшлийн тоо" />
      <NumberField source="govPercent" label="Төрийн эзэмшлийн хувь" />
      <TextField source="tradeStatus" label="Арилжааны эрх" />
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
  <Create {...props}>
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
  </Create>
);

export const TicketEdit = (props: any) => (
  <Edit {...props}>
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
