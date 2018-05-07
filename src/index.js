import React from "react";
import _ from "lodash";
import test from "./test";

console.log("Hi there");

console.log(_.partition([1, 2, 3, 4], n => n % 2));

const Component = () => <p>Hello there 2</p>;

export default Component;
