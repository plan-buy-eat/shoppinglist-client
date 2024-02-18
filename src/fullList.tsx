import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, TextInput, BulkDeleteButton} from "react-admin";
import { WithListContext } from 'react-admin';
import { Save } from '@mui/icons-material';

const postFilters = [
    <TextInput name="q" key="q" source="q" label="Search" alwaysOn />,
];

// const CheckField = () => <span><input className="" type="checkbox"></input></span>;
// CheckField.defaultProps = { label: 'Selected' };

const PostBulkActionButtons = () => (
    <>
        {/* default bulk delete action */}
        <BulkDeleteButton label="Save" icon={<Save/>} />
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

export const FullDataList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={postFilters} perPage={10}>
        {/* <InfiniteList filters={postFilters} perPage={10}> */}
            <WithListContext render={({ selectedIds }) =>
                isSmall ? (
                    <Datagrid
                        bulkActionButtons={<PostBulkActionButtons />}
                        rowClick="toggleSelection"
                        rowSx={getPostRowSx(selectedIds)}
                    >
                        <TextField source="title"/>
                        <TextField source="amount"/>
                    </Datagrid>
                ) : (
                    <Datagrid
                        bulkActionButtons={<PostBulkActionButtons />}
                        rowClick="toggleSelection"
                        rowSx={getPostRowSx(selectedIds)}
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