import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({ website, twitter, github, linkedin, facebook }) {
  return (
    <Wrapper>
      {website && (
        <SocialLink href={website} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Website
        </SocialLink>
      )}
      {twitter && (
        <SocialLink href={twitter} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          Twitter
        </SocialLink>
      )}
      {github && (
        <SocialLink href={github} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Github
        </SocialLink>
      )}
      {linkedin && (
        <SocialLink href={linkedin} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </SocialLink>
      )}
      {facebook && (
        <SocialLink href={facebook} target="_blank" rel="noopener">
          <svg version="1.0" 
           xmlns="http://www.w3.org/2000/svg"
           width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
           preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M2255 5108 c-105 -12 -298 -51 -409 -83 -994 -288 -1724 -1155 -1835
          -2177 -14 -125 -14 -451 0 -576 99 -919 703 -1723 1562 -2081 170 -71 487
          -161 566 -161 l21 0 0 895 0 895 -325 0 -325 0 0 370 0 370 325 0 325 0 0 359
          c0 397 6 462 61 617 107 305 331 497 659 564 94 20 128 21 325 17 184 -4 433
          -26 483 -42 9 -3 12 -76 12 -318 l0 -314 -212 -6 c-263 -7 -317 -20 -402 -98
          -108 -99 -126 -176 -126 -556 l0 -223 355 0 c312 0 355 -2 355 -15 0 -17 -96
          -652 -106 -698 l-6 -27 -299 0 -299 0 0 -895 0 -895 21 0 c79 0 396 90 566
          161 859 358 1463 1162 1562 2081 14 125 14 451 0 576 -128 1181 -1080 2133
          -2261 2261 -115 13 -479 12 -593 -1z"/>
          </g>
          </svg>
          Facebook
        </SocialLink>
      )}
    </Wrapper>
  );
}

export default Social;
