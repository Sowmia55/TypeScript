"use strict";
//create 2 variables
let User = { id: "aaaa" };
let Product = { id: "aaaa" };
// structure for both user and product are same. both has id of type stirng.
// Type script type system is structural.It does not care about the name of the types
User = Product;
Product = User;
let Point2D = { x: 1, y: 2 };
let Point3D = { x: 1, y: 2, z: 2 };
Point2D = Point3D; //its allowed since x and y are part of Point3D)
function takesPoint2D(point) { }
takesPoint2D(Point3D);
//this is also called duck typing, 3d can be passed instead of 2d but 2d cannot be used as alternative for 3d
