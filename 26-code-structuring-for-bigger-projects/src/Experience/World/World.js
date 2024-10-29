import * as THREE from "three";
import Experience from "../experience.js";
import Environment from "./Environment";
import Floor from "./Floor.js";
import Fox from "./Fox.js";
// import { log } from "three/webgpu";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      // Setup
      this.floor = new Floor();
      this.fox = new Fox()
      this.environment = new Environment();
    });
  }
  update(){
    if(this.fox)
    {this.fox.update()}
  }
}
