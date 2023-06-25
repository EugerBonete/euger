import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import Model from "./3d";

export default function CanvasContainer() {
  return (
    <Canvas
      shadows
      camera={{ position: [1, 7, 15], rotation: [0, 0, 0], fov: 45 }}
    >
      <ambientLight intensity={5} />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <OrbitControls
        maxPolarAngle={Math.PI / 4} // Restrict rotation to 90 degrees up and down
        minPolarAngle={Math.PI / 4} // Restrict rotation to 90 degrees up and down
        minDistance={20} // Set the minimum zoom distance
        maxDistance={25} // Set the maximum zoom distance
      />
    </Canvas>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}