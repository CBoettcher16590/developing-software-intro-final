# Calculator Instructions
[Go Back](../../README.md)


In this Version of the project(1.1.4), the `calcHouseMaterials`, and `getHouseMaterials` functions will display their stored infromation in the command line. I have created an interface called `IHouseOutput` that ensures that the output of each of these functions will work for Gerlads purposes. 

## calcHouseMaterials( name:string, width:number, length:number, unit:boolean )

The `calcHouseMaterials` function takes four parameters: `name`, `length`, `width`, and `units`. It is used within the `calc-house-materials` command, and gets its values passed from here. 

Example:

When we execute this command in the terminal...
```
node dist/index calc-house-materials -l 10 -w 10 -n Test --isFeet true
```

Our calcHouseMaterials Function will return:
<!-- This will be terminal output not javascript, but javascript increases readability in readme -->
```javascript
{
  name: 'Test',
  house: {
    width: 10,
    length: 10,
    outsideWallArea: 0,
    insideWallArea: 0,
    ceilingArea: 0
  },
  materials: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 },
  waste: { lumber: { boards: 0, posts: 0 }, plywood: 0, drywall: 0 },
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

The `calcWallLumber` function takes inches as a parameter, and then calculates how manu plates, studs, and EXTRA posts are needed for that specific wall. It is not meant to be called from the terminal as it is a background calculation, but it will be called by the `calcHouseMaterials` function in later versions. 

Output Example:

```javascript
{ plates: 3, studs: 7, posts: 0 }
```