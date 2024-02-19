import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, TextInput, useDelete, useRefresh, useRecordContext} from "react-admin";
import { Identifier, RaRecord, WithListContext } from 'react-admin';
import { Save } from '@mui/icons-material';

const postFilters = [
    <TextInput name="q" key="q" source="q" label="Search" alwaysOn />,
];

// const CheckField = () => <span><input className="" type="checkbox"></input></span>;
// CheckField.defaultProps = { label: 'Selected' };

const PostBulkActionButtons = () => (
    <>
        {/* default bulk delete action */}
        {/* <BulkDeleteButton label="Save" icon={<Save/>} /> */}
    </>
);

const getPostRowSx = (selectedIds: any[])=> {
    return (record: any/*, index: number*/) => {
        if (record.bought === true) {
            return ({textDecoration: 'line-through', fontStyle: 'italic'});
        }
        return ({});
    };
}

function wait(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const SwitchButton = () => {
    const record = useRecordContext();
    const refresh = useRefresh();
    const [deleteOne, { isLoading, error }] = useDelete(
        'items',
        { id: record.id, previousData: record }
    );
    const handleClick = async () => {
        await deleteOne()
        await wait(300)
        await refresh()
        return ""
    }
    if (error) { return <p>ERROR</p>; }
    return <button disabled={isLoading} onClick={handleClick}>Switch</button>;
};

const postRowClick = (id: Identifier, resource: string, record: RaRecord) => {
    // console.log(id);
    // console.log(resource);
    // console.log(record);
    // const [deleteOne, { isLoading, error }] = useDelete(
    //     'items',
    //     { id: record.id, previousData: record }
    // );
    // return deleteOne().then(_ => "")
    return "";
}

export const FullDataList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={postFilters} perPage={10} >
        {/* <InfiniteList filters={postFilters} perPage={10}> */}
            <WithListContext render={({ selectedIds }) =>
                isSmall ? (
                    <Datagrid 
                        bulkActionButtons={false}
                        rowClick={postRowClick}
                        rowSx={getPostRowSx(selectedIds)}
                    >
                        <TextField source="title"/>
                        <TextField source="amount"/>
                        <SwitchButton/>
                    </Datagrid>
                ) : (
                    <Datagrid
                        bulkActionButtons={false}
                        rowClick={postRowClick}
                        rowSx={getPostRowSx(selectedIds)}
                    >
                        {/*<TextField source="id" />*/}
                        <TextField source="title"/>
                        <TextField source="amount"/>
                        <TextField source="unit"/>
                        <TextField source="shop"/>
                        <SwitchButton/>
                    </Datagrid>
                )}
            />
        {/* </InfiniteList> */}
        </List>
    );
};