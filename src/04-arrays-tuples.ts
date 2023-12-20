//Arrays

let array1: Array<number> = [1, 2, 3];  /**_______________this is called annotating with Array class name and with generic argument called number */
let array2: number[] = [1, 2, 3, 4]; /**simple way */

//fixed length array is called tuples
let tuple: [number, number] = [0, 0];

//usage
tuple = [1, 2];
// tuple = [1,2,3]; << error
