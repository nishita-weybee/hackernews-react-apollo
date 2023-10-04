import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const LinkList = () => {
  const FEED_QUERY = gql`
    {
      feed {
        id
        links {
          id
          createdAt
          url
          description
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(FEED_QUERY);
  // const linksToRender = [
  //   {
  //     id: "link-id-1",
  //     description: "Prisma gives you a powerful database toolkit 😎",
  //     url: "https://prisma.io",
  //   },
  //   {
  //     id: "link-id-2",
  //     description: "The best GraphQL client",
  //     url: "https://www.apollographql.com/docs/react/",
  //   },
  // ];

  console.log(data, loading, error);

  return (
    <div>
      {data?.feed.links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
