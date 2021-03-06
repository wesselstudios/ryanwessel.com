import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import base64Favicon from 'public/favicon';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="Description" content={description}></meta>
      <link rel="shortcut icon" type="image/x-icon" href={base64Favicon} />
      <link rel="apple-touch-icon" href={base64Favicon} />
      <link rel="apple-touch-icon" sizes="76x76" href={base64Favicon} />
      <link rel="apple-touch-icon" sizes="120x120" href={base64Favicon} />
      <link rel="apple-touch-icon" sizes="152x152" href={base64Favicon} />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Meta;
