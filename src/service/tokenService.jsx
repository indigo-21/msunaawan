import axios from "axios";

export const getAccessTokenWithRefreshToken = async () => {
    const refreshToken = import.meta.env.VITE_REFRESH_TOKEN; // Ensure this is set
    const clientId = import.meta.env.VITE_CLIENT_ID; // Ensure this is set
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET; // Ensure this is set
    const tokenEndpoint =
        "https://login.microsoftonline.com/e7e186d9-a776-4f94-9999-24470b3961ae/oauth2/v2.0/token"; // Microsoft token endpoint

    // console.log("Request Payload:", {
    //     client_id: clientId,
    //     client_secret: clientSecret,
    //     refresh_token: refreshToken,
    //     grant_type: "refresh_token", // Ensure this is correct
    //     scope: import.meta.env.VITE_SCOPE, // Ensure this is set
    // });

    try {
        // const response = await axios.post(
        //     tokenEndpoint,
        //     new URLSearchParams({
        //         client_id: clientId,
        //         client_secret: clientSecret,
        //         refresh_token: refreshToken,
        //         grant_type: "client_credentials",
        //         scope: import.meta.env.VITE_SCOPE,
        //     }),
        //     {
        //         headers: {
        //             "Content-Type": "application/x-www-form-urlencoded",
        //             "Access-Control-Allow-Origin": "*",
        //         },
        //     },
        // );

        const response = await axios.post(
            tokenEndpoint,
            new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                // refresh_token: refreshToken,
                grant_type: "client_credentials",
                scope: import.meta.env.VITE_SCOPE,
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            },
        );

        // const response = await axios.post(
        //     tokenEndpoint, // Proxy endpoint in Vite
        //     new URLSearchParams({
        //         client_id: clientId,
        //         client_secret: clientSecret,
        //         refresh_token: refreshToken,
        //         grant_type: "client_credentials",
        //         scope: import.meta.env.VITE_SCOPE,
        //     }),
        //     {
        //         headers: {
        //             "Content-Type": "application/x-www-form-urlencoded",
        //         },
        //     },
        // );
        console.log("response" + response);
        // return response.data.access_token; // Returns the new access token
    } catch (error) {
        console.error(
            "Failed to refresh access token",
            error.response ? error.response.data : error,
        );
        return null;
    }
};
