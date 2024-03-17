import React, { useRef, forwardRef } from 'react';
import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, TextInput, useDelete, useRefresh, useRecordContext} from "react-admin";
import { Identifier, RaRecord, WithListContext } from 'react-admin';
import { Save } from '@mui/icons-material';

const postFilters = [
    <TextInput name="q" key="q" source="q" label="Search" alwaysOn />,
];

// const CheckField = () => <span><input className="" type="checkbox"></input></span>;
// CheckField.defaultProps = { label: 'Selected' };

export const InventoryList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={postFilters} perPage={10} >
        {/* <InfiniteList filters={postFilters} perPage={10}> */}
            <WithListContext render={({ selectedIds }) =>
                isSmall ? (
                    <Datagrid 
                    rowClick="edit"
                    >
                        <TextField source="title"/>
                        <TextField source="amount"/>
                    </Datagrid>
                ) : (
                    <Datagrid
                    rowClick="edit"
                    >
                        {/*<TextField source="id" />*/}
                        <TextField source="title"/>
                        <TextField source="amount"/>
                        <TextField source="unit"/>
                        <TextField source="shop"/>
                    </Datagrid>
                )}
            />
        {/* </InfiniteList> */}
        </List>
    );
};