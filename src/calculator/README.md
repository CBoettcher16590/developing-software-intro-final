# Calculator Instructions
[Go Back](../../README.md)
## calcHouseMaterials (name:string, width:number, length:number, unit:boolean)

In this Version of the project(1.1.1), the calcHouseMaterials function will display the parameters in the command line, but in future versions it will be responcible for calculating the materials needed for Geralds Projects. 

## How calcHouseMaterials is Used

The `calcHouseMaterials` function takes four parameters: `name`, `length`, `width`, and `units`. It is used within the `calc-house-materials` command, and gets its values passed from this command. 

Example:

When we execute this command in the terminal...
```
node dist calc-house-materials -l 10 -w 10 -n Test --isFeet true
```

Our calcHouseMaterials Function will return:
```
Length: 10 | Width: 10 | Name: Test | Units: feet
```