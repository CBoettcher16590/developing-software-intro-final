# Calculator Instructions
[Go Back](../../README.md)


In this Version of the project(1.1.2), the `calcHouseMaterials`, and `getHouseMaterials` functions will display their respective parameters in the command line, but in future versions they will be responcible for calculating the materials needed, and recalling saved jobs. 


## calcHouseMaterials( name:string, width:number, length:number, unit:boolean )

The `calcHouseMaterials` function takes four parameters: `name`, `length`, `width`, and `units`. It is used within the `calc-house-materials` command, and gets its values passed from this command. 

Example:

When we execute this command in the terminal...
```
node dist/index calc-house-materials -l 10 -w 10 -n Test --isFeet true
```

Our calcHouseMaterials Function will return:
```
Length: 10 | Width: 10 | Name: Test | Units: feet
```

## getHouseMaterials( name:string )

The `getHouseMaterials` function only takes in one parameter: `name`. It is used within get-house-materials command, and gets its value passed in from this command. 

Example:

When we execute this command in the terminal...
```
node dist/index get-house-materials -n Test
```

Our calcHouseMaterials Function will return:
```
Name: Test
```