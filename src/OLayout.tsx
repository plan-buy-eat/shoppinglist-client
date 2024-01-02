import { CheckForApplicationUpdate, Layout, LayoutProps } from 'react-admin';
import { ReactQueryDevtools } from 'react-query/devtools';

export const OLayout = ({ children, ...props }: LayoutProps) => (
    <>
        <Layout {...props}>
            {children}
            <CheckForApplicationUpdate />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
    </>
);