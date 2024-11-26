import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const RotatingTree = ({ tree }) => {
  const treeRef = useRef();

  // Add rotation inside the Canvas component
  useFrame(() => {
    if (treeRef.current) {
      treeRef.current.rotation.y += 0.01; // Rotate around Y-axis
    }
  });

  return <primitive ref={treeRef} object={tree} scale={0.1} />;
};

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
      {/* Яркое общее освещение */}
      <ambientLight intensity={1.5} /> {/* Увеличено с 0.8 до 2 */}

      {/* Яркий направленный свет */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={2} // Увеличено с 1.5 до 3
        color={"#ffffff"}
      />

      {/* Яркий "небесный" свет */}
      <hemisphereLight
        skyColor={"#ffffff"}
        groundColor={"#444444"}
        intensity={2} // Увеличено с 0.6 до 1.5
      />

      {/* Контроллер камеры */}
      <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />

      {/* Отрисовка вращающегося объекта */}
      {tree && <RotatingTree tree={tree} />}
    </Canvas>
  );
};

export default Tree;