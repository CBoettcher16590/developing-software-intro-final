# Calculator Instructions
[Go Back](../../README.md)


In this Version of the project (`1.2.0`), the `calcHouseMaterials`, and `getHouseMaterials` functions will display their stored infromation in the command line. I have created an interface called `IHouseOutput` that ensures that the output of each of these functions will work for Gerlads purposes. 

## calcHouseMaterials( name:string, width:number, length:number, unit:boolean )

The `calcHouseMaterials` function takes four parameters: `name`, `length`, `width`, and `units`. 

*Version 1.1.8 change*

I have also added the `houseMaterials` function inside the body of the `calcHouseMaterials` function. This will allow us to fill enter more data in our IHouseOutput. 

*Version 1.1.9 change*

I have added the `calcWaste` function inside the `calcHouseMaterials` function. This will allow us to add the waste output in out return statement. 



Example:

When we execute this command in the terminal...
```
node dist/index calc-house-materials -l 120 -w 120 --isFeet false -n Test
```

Our calcHouseMaterials Function will return:
<!-- This will be terminal output not javascript, but javascript increases readability in readme -->
```javascript
{
  name: 'Test',
  house: {
    width: 120,
    length: 120,
    outsideWallArea: 57600,
    insideWallArea: 57572,
    ceilingArea: 14400
  },
  materials: { lumber: { boards: 32, posts: 4 }, plywood: 10, drywall: 14 },
  waste: { lumber: { boards: 4, posts: 1 }, plywood: 1, drywall: 2 },
  purchase: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 }
}
```

## getHouseMaterials( name:string )

The `getHouseMaterials` function only takes in one parameter: `name`. It is used within get-house-materials command, and gets its value passed in from this command. 

Example:

When we execute this command in the terminal...
```
node dist/index get-house-materials -n Test
```

Our calcHouseMaterials Function will return:
<!-- This will be terminal output not javascript, but javascript increases readability in readme -->
```javascript
{
  name: 'Test',
  house: {
    width: 0,
    length: 0,
    outsideWallArea: 0,
    insideWallArea: 0,
    ceilingArea: 0
  },
  materials: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 },
  waste: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 },
  purchase: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 }
}
```

## calcWallLumber( inches ) Function

The `calcWallLumber` function takes inches as a parameter, and then calculates how manu plates, studs, and EXTRA posts are needed for that specific wall. *It is not meant to be called from the terminal as it is a background calculation.* It will be called by the `calcHouseMaterials` function in later versions. 

Output Example for a wall 96inches x 96inches:

```javascript
{ plates: 3, studs: 7, posts: 0 }
```

## calcDrywall( width:number, length:number ) Function
The `caclDrywall` function takes two parameters(width, length) for the house, and returns the number of drywall sheets needed for the walls and ceiling. *It is not meant to be called from the terminal as it is a background calculation.* It will be called by the `calcHouseMaterials` function in later versions.

Output Example for a House 96inches x 96inches:

```javascript
10
```

## calcPlywood( width:number, length:number ) Function
The `caclPlywood` function takes two parameters(width, length) for the house, and returns the number of plywood sheets needed for the exterior walls. *It is not meant to be called from the terminal as it is a background calculation.* It will be called by the `calcHouseMaterials` function in later versions.

Output Example for a House 96inches x 96inches:

```javascript
8
```

## calcMaterials( width:number, length:number, calcWallLumber, calcDrywall, caclPlywood ) Function

The `calcMaterials` function takes five parameters(width, length, calcWallLumber, CalcDrywall, CalcPlywood), and will return an object the matches the IHouseOutput interface.

This function is used within the calcHouseMaterials function, so to demonstrate the ouput of calcMaterials, we will need to type in: 

```
node dist/index.js calcHouseMaterials(120, 120, calcWallLumber, calcDrywall, calcPlywood)
```

Output:

```javascript
  name: 'Test',
  house: {
    width: 120,
    length: 120,
    outsideWallArea: 57600,
    insideWallArea: 57572,
    ceilingArea: 14400
  },
  materials: { lumber: { boards: 32, posts: 4 }, plywood: 10, drywall: 14 },
  waste: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 },
  purchase: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 }
```

## calcWaste( items ) Function

The `calcWaste` function takes one only one parameter; In this case the value of calcMaterials gets passed in, and we can find how much waste we need to purchase. 

This function is used within the calcHouseMaterials function, so to demonstrate the ouput of calcWaste, we will need to type in: 

```
node dist/index.js calcHouseMaterials(120, 120, calcWallLumber, calcDrywall, calcPlywood)
```

Output:

```javascript
  name: 'Test',
  house: {
    width: 120,
    length: 120,
    outsideWallArea: 57600,
    insideWallArea: 57572,
    ceilingArea: 14400
  },
  materials: { lumber: { boards: 32, posts: 4 }, plywood: 10, drywall: 14 },
  waste: { lumber: { boards: 4, posts: 1 }, plywood: 1, drywall: 2 },
  purchase: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 }
```

## calcPurchase( items ) Function

The `calcPurchase` function takes one only one parameter; In this case the value of calcMaterials gets passed in, and we can find the total ammount of materials we need to purchase including the waste. 


This function is used within the calcHouseMaterials function, so to demonstrate the ouput of calcWaste, we will need to type in: 

```
node dist/index.js calcHouseMaterials(120, 120, calcWallLumber, calcDrywall, calcPlywood)
```

Output:

```javascript
  name: 'Test',
  house: {
    width: 120,
    length: 120,
    outsideWallArea: 57600,
    insideWallArea: 57572,
    ceilingArea: 14400
  },
  materials: { lumber: { boards: 32, posts: 4 }, plywood: 10, drywall: 14 },
  waste: { lumber: { boards: 4, posts: 1 }, plywood: 1, drywall: 2 },
  purchase: { lumber: { boards: 36, posts: 5 }, plywood: 11, drywall: 14 }
```
