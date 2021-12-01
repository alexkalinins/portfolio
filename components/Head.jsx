import React from 'react'
import {default as NextHead} from 'next/head'

/**
 * Head rfc containing meta tags.
 */
export default function Head({pageTitle}) {
    return (
        <NextHead>
            <title>Alex Kalinins{pageTitle?` | ${pageTitle}`:''}</title>
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta
            property="og:description"
            content="Alex Kalinins' Portfolio 2021"
            key="ogdescription"
          />
        </NextHead>
    )
}
