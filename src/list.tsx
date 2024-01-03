import { useMediaQuery, Theme } from "@mui/material";
import {InfiniteList, Datagrid, TextField, TextInput} from "react-admin";
import { WithListContext } from 'react-admin';

const postFilters = [
    <TextInput name="q" key="q" source="q" label="Search" alwaysOn />,
];

const CheckField = () => <span><input className="" type="checkbox"></input></span>;
CheckField.defaultProps = { label: 'Selected' };

const getPostRowSx = (selectedIds: any[])=> {
    return (record: any/*, index: number*/) => {
        if (selectedIds.includes(record.id)) {
            return ({textDecoration: 'line-through'});
        }
        return ({textDecoration: ''});
    };
}

export const DataList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <InfiniteList filters={postFilters} perPage={10}>
            <WithListContext render={({ selectedIds }) =>
                isSmall ? (
                    <Datagrid
                        rowClick="toggleSelection"
                        rowSx={getPostRowSx(selectedIds)}
                    >
                        <CheckField label="Bought"/>
                        <TextField source="name"/>
                    </Datagrid>
                ) : (
                    <Datagrid
                        rowClick="toggleSelection"
                        rowSx={getPostRowSx(selectedIds)}
                    >
                        {/*<TextField source="id" />*/}
                        <CheckField label="Bought"/>
                        <TextField source="title"/>
                        <TextField source="amount"/>
                        <TextField source="unit"/>
                        <TextField source="shop"/>
                    </Datagrid>
                )}
            />
        </InfiniteList>
    );
};