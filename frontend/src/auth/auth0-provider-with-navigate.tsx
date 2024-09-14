import { useCreateUser } from "@/api/user-api";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

interface Props {
    children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const { createUser } = useCreateUser();

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientId || !redirectUri) {
        throw new Error(
            "Please define the VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID and VITE_AUTH0_CALLBACK_URL environment variables inside .env"
        );
    }

    const onRedirectCallback = async (appState?: AppState, user?: User) => {
        if (user?.sub && user?.email) {
            createUser({ auth0Id: user.sub, email: user.email });
        }
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;
