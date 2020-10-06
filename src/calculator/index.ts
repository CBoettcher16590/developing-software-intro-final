export function calcHouseMaterials(
    name: string,
    width: number,
    length: number,
    units: boolean
) {
    let unitOfMeasurement;

    if (units === true) {
        unitOfMeasurement = "feet";
    } else {
        unitOfMeasurement = "inches";
    }

    console.log(
        "Length: " + length,
        "| Width: " + width,
        "| Name: " + name,
        "| Units: " + unitOfMeasurement
    );
}

export function getHouseMaterials(name: string) {
    console.log("Name: " + name);
}
