# Focus College ACSD Final

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Software Development Final Assignment
### Version 1.1.0

# How to use Yargs Commands

## CalcHouseMaterials

The `calc-house-materials` command takes four parameters to work properly: `length`, `width`, `isFeet`, and `name`. In this version of the project the command will only output the parameters entered to the command line.

### CalcHouseMaterials Parameters:
* The `length` of the house (preceeded by the `-l` flag)
* The `width` of the house (preceeded by the `-w` flag)
* `isFeet` gives us the unit of measurement for a house. Enter `true` for feet, or `false` for inches (preceeded by the `--isFeet` flag)
* The `name` of the house (preceeded by the `-n` flag)

Example: 

```
npm run dist/index calc-house-materials -l 10 -w 16 --isFeet true -n TestHouse 
```

## GetHouseMaterials

The `get-house-materials` command takes only one parameter: `name`. In this version of the project the command will only output the parameter that was entered to the command line.

### CalcHouseMaterials Parameters:
* The `name` of the house (preceeded by the `-n` flag)

Example: 

```
npm run dist/index get-house-materials -n TestHouse 
```

# How to Use the package.json Scripts

In this version of the Final Assignment, I have included eight scripts that you can run: `compile`, `start`, `format`, `lint`, `test`, `test:coverage`, `build`, and `build:dev`

### Compile

* `compile`, runs the tsc command and compiles the project

Ecample:

```
npm run compile
```

### Start

* `start`, runs the index.js file in the "dist" folder, which is created by the tsconfig.json file.

Example:

```
npm run start
```

### ESLint

* `lint`, runs eslint to "lint" our code. ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.

Example:

```
npm run lint
```

### Prettier

* `format`, runs the npm package "prettier". This auto format our code to make it look pretty.

Example:

```
npm run format
```

### Test

* `test`, runs the tests that we write in our "tests" folder.

Example:

```
npm run test
```


### Test with Coverage

* `test:coverage`, runs the tests for the project, as well as displaying a coverage map using "nyc/istanbul" that shows how much of our code was tested. 

Example:

```
npm run test:coverage
```


### Build

* `build`, runs both the `compile`, and `start` scripts
 
 Example:

```
npm run build
```

### Build:dev

* `build:dev`, runs all the commands. First `lint`, followed by `prettier`, `test` and then it will compile and run the program.
 
 Example:

```
npm run build:dev
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
