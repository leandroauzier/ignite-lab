import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q4aykp2rtg01xtax9ugt6g/master',
    cache: new InMemoryCache()
})