import React from 'react'
import { default as NextHead } from 'next/head'

/**
 * Head rfc containing meta tags.
 */
export default function Head({ pageTitle }) {
    return (
        <NextHead>
            <link rel='icon' href='/favicon.ico'/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

            <title>{pageTitle ? `${pageTitle} | ` : ''}Alex Kalinins</title>
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta
                property="og:description"
                content="Alex Kalinins' Portfolio 2021"
                key="ogdescription"
            />
            <meta property="og:image" content="https://alexkalinins.com/media/images/portfolio.png" key="ogimage" />
            
            
        </NextHead>
    )
}
