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
    <TextInput label="Симболоор хайх" source="symbol" alwaysOn />
  </Filter>);
};

export const BondList = (props: any) => (
  <List
    title="Үнэт цаасны жагсаалт"
    filters={<PostFilter />}
    exporter={false}
    {...props}
  >
    <Datagrid>
      <TextField source="code" label="Код" />
      <TextField source="symbol" label="Симбол" />
      <TextField source="companyName" label="Компаний нэр" />
      <TextField source="companyType" label="Компаний ангилал" />
      {/* <NumberField source="quantity" label="Нийт хувьцааны т.ш." />
      <NumberField source="offeredPrice" label="Санал болгосон үнэ" />
      <NumberField source="offeredQuantity" label="Санал болгосон ширхэг" />
      <NumberField source="govQuantity" label="Төрийн эзэмшлийн тоо" />
      <NumberField source="govPercent" label="Төрийн эзэмшлийн хувь" /> */}
      <TextField source="tradeStatus" label="Арилжааны эрх" />
      <ShowButton label="Үзэх" />
      <EditButton label="Засах" />
      <DeleteButton label="Устгах" />
    </Datagrid>
  </List>
);

export const BondShow = (props: any) => (
  <Show title="Үнэт цаас" {...props}>
    <SimpleShowLayout>
      <TextField source="code" label="Код" />
      <TextField source="symbol" label="Симбол" />
      <TextField source="companyName" label="Компаний нэр" />
      <TextField source="companyType" label="Компаний ангилал" />
      <NumberField source="quantity" label="Нийт хувьцааны т.ш." />
      <NumberField source="offeredPrice" label="Санал болгосон үнэ" />
      <NumberField source="offeredQuantity" label="Санал болгосон ширхэг" />
      <NumberField source="govQuantity" label="Төрийн эзэмшлийн тоо" />
      <NumberField source="govPercent" label="Төрийн эзэмшлийн хувь" />
      <TextField source="tradeStatus" label="Арилжааны эрх" />
    </SimpleShowLayout>
  </Show>
);

export const BondCreate = (props: any) => (
  <Create title="Үнэт цаас" {...props} >
    <SimpleForm redirect="list">
      <TextInput source="code" label="Код" />
      <TextInput source="symbol" label="Симбол" />
      <TextInput source="companyName" label="Компаний нэр" />
      <TextInput source="companyType" label="Компаний ангилал" />
      <NumberInput source="quantity" label="Нийт хувьцааны т.ш." />
      <NumberInput source="offeredPrice" label="Санал болгосон үнэ" />
      <NumberInput source="offeredQuantity" label="Санал болгосон ширхэг" />
      <NumberInput source="govQuantity" label="Төрийн эзэмшлийн тоо" />
      <NumberInput source="govPercent" label="Төрийн эзэмшлийн хувь" />
      <TextInput source="tradeStatus" label="Арилжааны эрх" />
    </SimpleForm>
  </Create>
);

export const BondEdit = (props: any) => (
  <Edit title="Үнэт цаас" {...props}>
    <SimpleForm>
      <TextInput source="code" label="Код" />
      <TextInput source="symbol" label="Симбол" />
      <TextInput source="companyName" label="Компаний нэр" />
      <TextInput source="companyType" label="Компаний ангилал" />
      <NumberInput source="quantity" label="Нийт хувьцааны т.ш." />
      <NumberInput source="offeredPrice" label="Санал болгосон үнэ" />
      <NumberInput source="offeredQuantity" label="Санал болгосон ширхэг" />
      <NumberInput source="govQuantity" label="Төрийн эзэмшлийн тоо" />
      <NumberInput source="govPercent" label="Төрийн эзэмшлийн хувь" />
      <TextInput source="tradeStatus" label="Арилжааны эрх" />
    </SimpleForm>
  </Edit>
);
