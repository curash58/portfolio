import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const Tree = () => {
  const [tree, setTree] = useState();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("/models/Lowpoly_tree_sample.mtl", (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load("/models/Lowpoly_tree_sample.obj", (object) => {
        setTree(object);
      });
    });
  }, []);

  return (
    <Canvas style={{ height: "500px", width: "100%" }} camera={{ position: [0, 2, 5], fov: 75 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color={"#ffffff"} />
      <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={0.6} />

      <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />

      {tree && <primitive object={tree} scale={0.1} />}
    </Canvas>
  );
};

export default Tree;