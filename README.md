# TypeScript

node provides runtime environment for javascript to run

https://cognizant.udemy.com/course/typescript-for-professionals/learn/lecture/22007264#overview

Install nodeJS
Verify node --v, npm --v, npx --v (npm,npx are executables)
npm init -y
npm i typescript -D
npx tsc --init --rootdir src --outdir lib(along with this tsc compiler will be installed, will generate tsconfig file)
first time running a script - npx tsc --watch, so corresponding javascript code will be generated in lib folder

> > > > > > > > > > > > > > > > > > > > > > then run js file using >> node lib/09-classes.js

npm i ts-node

> > > > > > > > > > > > > > > > > > > > > > directly to run an ts file >> npx ts-node src/09-classes.ts

creating react app
npx create-react-app example --template typescript
open terminal and "npm start"
