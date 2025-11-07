
import React from 'react';

// FIX: Corrected invalid SVG props ('class', 'stroke-width', 'stroke-linecap', 'stroke-linejoin')
// to their React/JSX camelCase equivalents. Also, replaced the copied link icon with a proper LinkedIn logo.
export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
