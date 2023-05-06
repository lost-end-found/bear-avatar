import Head from "next/head";
import React from "react";
import Script from 'next/script';

const title = "Generate Custom AI avatar - AIvatar";
const description =
  "Generate AI avatars that perfectly capture your unique style. Write a prompt and let our Dreambooth and Stable diffusion technology do the rest.";
const image = "https://aivatar.studio/og-cover.jpg";

const DefaultHead = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta itemProp="image" content={image} />
        <meta property="og:logo" content={image}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shinework" />
        <meta name="twitter:creator" content="@shinework" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Script data-domain="aivatar.studio" strategy="lazyOnload" src="https://analytics.rakun.ie/js/plausible.js" />
      <Script
        id="next-plausible-init"
        dangerouslySetInnerHTML={{
          __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
        }}
      />
    </>
  )
}

export default DefaultHead;
