# TypeScript

Install nodeJS
Verify node --v, npm --v, npx --v (npm,npx are executables)
npm init -y
npm i typescript
npx tsc --init --rootdir src --outdir lib(along with this tsc compiler will be installed, will generate tsconfig file)
first time running a script - npx tsc --watch, so corresponding javascript code will be generated in lib folder
then run using >> node lib/index.js
