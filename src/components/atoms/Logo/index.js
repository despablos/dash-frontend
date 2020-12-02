// @flow
import * as React from 'react';

const Logo = () => (
  <div className="logo">
    <a href="/" className="logo-wrap">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1200 301"
        xmlSpace="preserve"
      >
        <path d="M240.3,197.4h-20.5c-15.3,0-28.4-10.1-33.2-24.2l11.6-4c3.1,9.2,11.6,15.9,21.6,15.9h20.5c7.2,0,13.3-6.3,13.3-13.9
	c0-8.7-9-11-18.3-12.3l-19-2.9c-12.9-1.8-30.6-6-30.6-24.6c0-14.3,11.4-26.2,25.3-26.2h20.5c15.3,0,28.4,10.1,33,24.2l-11.4,4
	c-3.3-9.2-11.6-15.7-21.6-15.7h-20.5c-7.2,0-13.3,6-13.3,13.7c0,9.6,11.6,11.4,20.8,12.8l18.1,2.5c14.2,2,29.1,7.8,29.1,24.6
	C265.7,185.7,254.5,197.4,240.3,197.4z"
        />
        <path d="M370.3,156.4c0,22.6-17.9,41-40,41c-10.5,0-20.5-4-28-11.6v49.7h-12V105.4h12V117c7.4-7.4,17.5-11.6,28-11.6
	c22.1,0,40,18.6,40,41.2V156.4z M358.3,146.6c0-15.9-12.7-28.7-28-28.7c-15.3,0-28,12.8-28,28.7v9.9c0,15.7,12.7,28.7,28,28.7
	c15.3,0,28-13,28-28.7V146.6z"
        />
        <path d="M455.7,197.4v-8.7c-6.3,5.6-14.6,8.7-22.9,8.7h-19.4c-14,0-25.3-11.9-25.3-26c0-14.3,11.6-26.2,25.3-26.2h29.3
	c6.1,0,13.3-0.9,13.3-8.5c0-13.7-11.6-18.8-22.9-18.8h-9.6c-9.8,0-18.6,6.3-21.8,15.7l-11.4-4c5-14.3,18.4-24,33.2-24h9.6
	c18.3,0,35,10.3,35,31.1v60.9h-12.2V197.4z M442.4,157.5h-29.3c-7.2,0-13.3,6.3-13.3,13.9c0,7.4,6.1,13.7,13.3,13.7h19.4
	c12.7,0,22.9-10.7,22.9-23.7v-6C451.4,157.1,447,157.5,442.4,157.5z"
        />
        <path d="M554.7,134.2c-4.6-9.9-14.4-16.3-25.1-16.3c-15.3,0-28,13-28,28.7v9.9c0,15.7,12.7,28.7,28,28.7c10.7,0,20.5-6.3,25.1-16.6
	l10.9,5.4c-6.6,14.3-20.5,23.3-36.3,23.3c-22.1,0-40-18.4-40-41v-9.9c0-22.6,17.9-41,40-41c15.5,0,29.5,9,36.3,23.3L554.7,134.2z"
        />
        <path d="M661.3,157.5h-67.7c0.7,15.4,12.9,27.5,27.7,27.5c10.7,0,20.5-6.3,25.1-16.6l10.9,5.4c-6.6,14.3-20.5,23.3-36.3,23.3
	c-22.1,0-40-18.4-40-41v-9.9c0-22.6,17.9-41,40-41s40,18.4,40,41v11.2H661.3z M621.3,117.9c-14.9,0-27.3,12.1-27.7,27.3h55.7
	C648.4,130.2,636.2,117.9,621.3,117.9z"
        />
        <path d="M775.3,197.4v-63.1c0-10.3-7.9-16.3-17.3-16.3c-8.5,0-15.7,7.4-15.7,16.3v63.4h-12.2v-63.4c0-10.3-7.9-16.3-17.3-16.3
	c-8.7,0-15.9,7.4-15.9,16.3v63.4h-12v-91.8h12v5.2c5.5-4,10.7-5.2,17.3-5.2c8.3,0,16.6,4,21.8,10.7c5.9-7.8,14-10.7,23.2-10.7
	c15.5,0,28,12.8,28,28.7v63.4h-11.8V197.4z"
        />
        <path d="M889.3,157.5h-67.7c0.7,15.4,12.9,27.5,27.7,27.5c10.7,0,20.5-6.3,25.1-16.6l10.9,5.4c-6.6,14.3-20.5,23.3-36.3,23.3
	c-22.1,0-40-18.4-40-41v-9.9c0-22.6,17.9-41,40-41c22.1,0,40,18.4,40,41v11.2H889.3z M849.4,117.9c-14.9,0-27.3,12.1-27.7,27.3h55.7
	C876.5,130.2,864.2,117.9,849.4,117.9z"
        />
        <path d="M963,197.4h-20.5c-15.3,0-28.4-10.1-33.2-24.2l11.6-4c3.1,9.2,11.6,15.9,21.6,15.9H963c7.2,0,13.3-6.3,13.3-13.9
	c0-8.7-9-11-18.3-12.3l-19-2.9c-12.9-1.8-30.6-6-30.6-24.6c0-14.3,11.4-26.2,25.3-26.2h20.5c15.3,0,28.4,10.1,33,24.2l-11.4,4
	c-3.3-9.2-11.6-15.7-21.6-15.7h-20.5c-7.2,0-13.3,6-13.3,13.7c0,9.6,11.6,11.4,20.8,12.8l18.1,2.5c14,1.8,29.1,7.6,29.1,24.4
	C988.3,185.7,977.2,197.4,963,197.4z"
        />
        <path d="M1080.9,197.4v-50.8c0-15.9-12.7-28.7-28-28.7c-15.3,0-28,12.8-28,28.7v50.8h-12V65.7h12v51.5c7.4-7.4,17.5-11.6,28-11.6
	c22.1,0,40,18.4,40,41v50.8H1080.9z"
        />
        <g>
          <path d="M147.3,196.2h-40.2l-2.9-6.8l17.4-17.8l-17.4-17.8l0-5.6l17.4-17.9l-17.4-17.9l2.9-6.8h40.2l2.9,6.8l-17.4,17.9l17.4,17.9
		l0,5.6l-17.4,17.8l17.4,17.8L147.3,196.2z M116.6,188.2h21.3l-10.6-10.9L116.6,188.2z M112.6,151l14.5,14.9l14.5-14.9L127.2,136
		L112.6,151z M116.5,113.6l10.7,11l10.6-11H116.5z"
          />
        </g>
      </svg>
    </a>
  </div>
);

export default Logo;
