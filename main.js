// const yellowChairMaker = (chairMaterial, color, price) => {
// 	const chairObject = {
// 		type: "Chair",
// 		color: color,
// 		material: chairMaterial,
// 		price: price
// 	}

// 	return chairObject
// }

// const chairStringMaker = (chairObject) => {
// 	const stringRepresentation = `The ${chairObject.color}, ${chairObject.material} ${chairObject.type} costs ${chairObject.price}`

// 	return stringRepresentation
// }

// const returnedChairObject = yellowChairMaker("Oak", "Green", 700.99)
// const returnedChairObject2 = yellowChairMaker("Plastic", "Pink", 988)
// // At this moment, the returnedChairObject variable has an object as its value

// const returnedChairString= chairStringMaker(returnedChairObject)
// const returnedChairString2 = chairStringMaker(returnedChairObject2)
// // At this moment, the returnedChairString variable has a string as its value

// console.log(returnedChairString)
// console.log(returnedChairString2)

/*
In the createWoodBlock function return an object with the following parameters 
type: "wood block",
length: 10,
material: "pine";
purpose: "flute"
"The 10-inch, pine woodblock was carved into a wooden flute"
*/

const createWoodBlock = () => {
    // Return an object with 4 properties.
    const objWoodBlock = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    };
    return objWoodBlock;
}

const createBeautifulCarving = (woodBlock) => {
    // Return a string representation of the object
    const blockString = `The ${woodBlock.length} inch, ${woodBlock.material} ${woodBlock.type} was carved into a wooden ${woodBlock.purpose}`
    return blockString;
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock();

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)