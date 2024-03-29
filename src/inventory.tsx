import * as React from "react";
import { Create, Edit, SimpleForm, TextInput, DateTimeInput, ReferenceManyField, 
    Datagrid, TextField, DateField, EditButton, NumberInput, BooleanInput,
    required, 
    BooleanField} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const InventoryCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <BooleanInput source="bought" />
            <NumberInput source="amount" />
            <TextInput source="unit" validate={[required()]} defaultValue="pc"/>
            <TextInput source="shop" multiline />
            <RichTextInput source="description" />
            <DateTimeInput source="when"/>
        </SimpleForm>
    </Create>
);

export const InventoryEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={[required()]} fullWidth />
            <BooleanInput source="bought" />
            <NumberInput source="amount"/>
            <TextInput source="unit" validate={[required()]} defaultValue="pc"/>
            <TextInput source="shop" multiline />
            <RichTextInput source="description" />
            <DateTimeInput source="when"/>
        </SimpleForm>
    </Edit>
);
