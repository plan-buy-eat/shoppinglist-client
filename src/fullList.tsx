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

const SwitchButton = forwardRef((props, ref) => {
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
    const c = encodeURIComponent(record.id.toString())
    return <button {...props} className={"switchbutton switchbutton-" + c} ref={ref} onClick={handleClick}>{}</button>;
});

const getPostRowClick = (ref) => {
const f = (id: Identifier, resource: string, record: RaRecord) => {
    const c = "switchbutton-"+encodeURIComponent(id.toString())
    ref.current.getElementsByClassName(c)[0].click()
    // ref.current.click()

    return "";
}
return f;
}

export const FullDataList = () => {
    const ref = useRef(null);
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={postFilters} perPage={10} >
        {/* <InfiniteList filters={postFilters} perPage={10}> */}
            <WithListContext render={({ selectedIds }) =>
                isSmall ? (
                    <Datagrid 
                        ref={ref}
                        bulkActionButtons={false}
                        rowClick={getPostRowClick(ref)}
                        rowSx={getPostRowSx(selectedIds)}
                        sx = {{
                            '& .switchbutton': {
                                display: 'none',
                            },
                            '&:hover .switchbutton': {
                                display: 'none',
                            },
                        }}
                    >
                        <TextField source="title"/>
                        <TextField source="amount"/>
                        <SwitchButton/>
                    </Datagrid>
                ) : (
                    <Datagrid
                        ref={ref}
                        bulkActionButtons={false}
                        rowClick={getPostRowClick(ref)}
                        rowSx={getPostRowSx(selectedIds)}
                        sx = {{
                            '& .switchbutton': {
                                display: 'none',
                            },
                            '&:hover .switchbutton': {
                                display: 'none',
                            },
                        }}
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