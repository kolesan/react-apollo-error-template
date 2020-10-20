import React from "react";
import { gql, useQuery } from "@apollo/client";

const A = gql`
    query A {
        SiteStatistics {
            anime {
                edges {
                    node {
                        date
                    }
                }
            }
        }
    }
`;
const B = gql`
    query B {
        SiteStatistics {
            manga {
                edges {
                    node {
                        date
                    }
                }
            }
        }
    }
`;

export default function App() {
    const q = useQuery(A);
    const q2 = useQuery(B);
    console.log({ q, q2 });
    return (
        <main>
            Check the broser network tab
        </main>
    );
}
