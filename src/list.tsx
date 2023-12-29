import { useMediaQuery, Theme } from "@mui/material";
import {InfiniteList, Datagrid, TextField, EmailField, TextInput, UrlField, useListContext} from "react-admin";

const postFilters = [
    <TextInput key="q" source="q" label="Search" alwaysOn />,
];

const CheckField = () => <span><input className="" type="checkbox"></input></span>;
CheckField.defaultProps = { label: 'Selected' };

function getRandomInt(ceil: number) {
  return Math.floor(Math.random() * ceil);
}
  
const postRowSx = (record, index)=> {
    const { selectedIds } = useListContext();
    if (selectedIds.includes(record.id)) {
        return ({ textDecoration: 'line-through' });
    }
    return ({ textDecoration: '' });
};

export const DataList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <InfiniteList filters={postFilters}>
            {isSmall ? (
                <Datagrid 
                    rowClick="toggleSelection"
                    rowSx={postRowSx}
                >
                    <TextField source="id" />
                    <CheckField label="Bought" />
                    <TextField source="name" />
                </Datagrid>
            ) : (
                <Datagrid 
                    rowClick="toggleSelection"
                    rowSx={postRowSx}
                >
                    <TextField source="id" />
                    <CheckField label="Bought" />
                    <TextField source="name" />
                    {/*<TextField source="username" />*/}
                    {/*<EmailField source="email" />*/}
                    {/*<TextField source="address.street" />*/}
                    {/*<TextField source="phone" />*/}
                    {/*<UrlField source="website" />*/}
                    {/*<TextField source="company.name" />*/}
                </Datagrid>
            )}
        </InfiniteList>
    );
};