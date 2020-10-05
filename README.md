# Focus College ACSD Final

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Software Development Final Assignment


### Version 1.0.2


## How to Use the package.json Scripts
--------------------------------------
In this version of the Final Assignment, I have included five scripts that you can run: `compile`, `start`, `lint`, `build`, and `build:lint`


* `compile`, runs the tsc command and compiles the project

Ecample:

    ```
    npm run compile
    ```


* `start`, runs the index.js file in the "dist" folder, which is created by the tsconfig.json file.

Example:

    ```
    npm run start
    ```

* `lint`, runs eslint to "lint" our code. ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.

Example:

    ```
    npm run lint
    ```

* `build`, runs both the `compile`, and `start` scripts
 
 Example:

    ```
    npm run build
    ```

* `build:lint`, runs the `lint` command first, then will run the `build` command to compile, and start the project.
 
 Example:

    ```
    npm run build:lint
    ```

## Developing Instrucions 
-------------------------
Download this application from Github:
```
git clone git@github.com:CBoettcher19590/developing-software-intro-final.git
```

If already downloaded:
```
git pull origin master
```

To install the dependencies:
```
npm install
```

To build and run the program:
```
npm run build
```
