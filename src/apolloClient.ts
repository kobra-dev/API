import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client/core";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () => new ApolloClient({
    link: new HttpLink({
        uri: "https://graphql.contentful.com/content/v1/spaces/" + process.env.CONTENTFUL_SPACE_ID,
        headers: {
            authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN
        }
    }),
    cache: new InMemoryCache()
});

export function initializeApollo() {
    const _apolloClient = apolloClient ?? createApolloClient();

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}