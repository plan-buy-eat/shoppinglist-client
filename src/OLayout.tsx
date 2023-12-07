import { CheckForApplicationUpdate, Layout, LayoutProps } from 'react-admin';

export const OLayout = ({ children, ...props }: LayoutProps) => (
    <Layout {...props}>
        {children}
        <CheckForApplicationUpdate />
    </Layout>
);