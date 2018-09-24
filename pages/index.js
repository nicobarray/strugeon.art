import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

import sanity from "../lib/sanity";
import Artwork from "../components/Artwork";

const Page = props => {
  console.log(props);
  return (
    <Fragment>
      <Head>
        <title>Home page</title>
      </Head>
      <Link href="/test">
        <a>here</a>
      </Link>
      <ul>
        {Object.values(props.paintings).map(item => (
          <Artwork key={item._id} {...item} />
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            outline: none;
          }
        `}
      </style>
    </Fragment>
  );
};

Page.getInitialProps = async () => {
  return {
    paintings: await sanity.fetch(`
      *[_type == "painting"] {
        _id,
        title,
        date,
        width,
        height,
        categories,
        "imageUrl": image.asset->url
      }
    `)
  };
};

export default Page;
