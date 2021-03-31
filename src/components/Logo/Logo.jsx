import React from "react";

const Logo = ({ className }) => {
  return (
    <svg
      className={className}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
        fill="#3DDC84"
      />
      <path
        d="M14.8072 21.3303C15.491 21.3303 16.2108 21.6239 17.0026 22.2477C17.9743 23.0183 18.6221 23.3853 18.982 23.3853C19.5219 23.3853 19.7738 23.0917 19.7738 22.5413C19.7738 22.2477 19.6298 21.9908 19.3059 21.7706C19.126 21.6606 18.2262 21.2936 16.5347 20.7064C13.7995 19.7156 12.4319 17.9174 12.4319 15.2385C12.4319 13.2202 13.1517 11.6422 14.5913 10.5046C15.8869 9.51376 17.4344 9 19.3059 9C20.9254 9 22.329 9.40367 23.5167 10.1743C24.7044 10.945 25.3162 11.9725 25.3162 13.2202C25.3162 13.9541 25.1003 14.578 24.6324 15.0917C24.1645 15.6055 23.5887 15.8257 22.8689 15.8257C22.1131 15.8257 21.2853 15.4587 20.3496 14.7248C19.7738 14.2844 19.3419 14.0275 19.054 14.0275C18.5501 14.0275 18.2982 14.2844 18.2982 14.7615C18.2982 15.2385 18.91 15.6789 20.1697 16.0459C21.8972 16.5963 23.1928 17.2569 24.1285 18.0642C25.3882 19.1284 26 20.5963 26 22.5046C26 24.5963 25.3162 26.211 23.9126 27.3853C22.617 28.4862 20.9254 29 18.838 29C16.7506 29 15.0231 28.4495 13.6555 27.3119C12.5758 26.3945 12 25.367 12 24.156C12 23.3486 12.2519 22.6881 12.7918 22.1376C13.3676 21.6239 14.0154 21.3303 14.8072 21.3303Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
