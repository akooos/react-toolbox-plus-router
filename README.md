# React Toolbox + React Router

React toolbox with react router support.

## Installation

    npm install --save react-toolbox-plus-router

## Usage

Use this library the same way you would with React Toolbox, the only difference
is that when you add something to href, React Router's link will be used:

```Javascript
import Link from 'react-toolbox-plus-router/lib/link';
import {Button, IconButton} from 'react-toolbox-plus-router/lib/button';
import {Button, IconButton, Link} from 'react-toolbox-plus-router/lib';

// Use the "href" instead of "to" property from react-router.
<Link href="url"/>
````
