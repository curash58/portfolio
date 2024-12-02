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
  const [canvasHeight, setCanvasHeight] = useState(window.innerWidth > 768 ? 500 : 400);

  useEffect(() => {
    const handleResize = () => {
      setCanvasHeight(window.innerWidth > 768 ? 500 : 400);
    };

    // Set initial height and add resize listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <Canvas
      style={{ height: `${canvasHeight}px`, width: "100%" }}
      camera={{ position: [0, 2, 5], fov: 75 }}
    >
      {/* Bright general lighting */}
      <ambientLight intensity={1.5} />
      {/* Bright directional light */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={2}
        color={"#ffffff"}
      />
      {/* Bright "sky" light */}
      <hemisphereLight
        skyColor={"#ffffff"}
        groundColor={"#444444"}
        intensity={2}
      />
      {/* Camera controller with zoom disabled */}
      <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />
      {/* Render rotating object */}
      {tree && <RotatingTree tree={tree} />}
    </Canvas>
  );
};

export default Tree;