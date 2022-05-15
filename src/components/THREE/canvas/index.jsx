import React, { Suspense, useRef } from "react";
import FuseBoxLogoModel from "../models/fuseboxLogo";
import { Canvas } from "@react-three/fiber";
import { CameraShake, Plane } from "@react-three/drei";
import Shaders from "../shaders/shaders";
import {
  EffectComposer,
  Selection,
  Select,
  Outline,
} from "@react-three/postprocessing";

const CanvasComponent = () => {
  const meshRef = useRef(null)
  return (
    <Canvas
      shadows
      camera={{ fov: 50 }}
      style={{ width: "100vw", height: "100vh", position: 'fixed', top: 0, left: 0, zIndex: -1 }}
    >
      <Suspense fallback={null}>
            <FuseBoxLogoModel meshRef={meshRef} />
      </Suspense>
      <Plane args={[20, 20]} position={[0, 0, -1]}>
        <meshBasicMaterial color="#222" />
      </Plane>
      <CameraShake
        maxYaw={0.1} // Max amount camera can yaw in either direction
        maxPitch={0.1} // Max amount camera can pitch in either direction
        maxRoll={0.1} // Max amount camera can roll in either direction
        yawFrequency={0.1} // Frequency of the the yaw rotation
        pitchFrequency={0.1} // Frequency of the pitch rotation
        rollFrequency={0.1} // Frequency of the roll rotation
        intensity={1} // initial intensity of the shake
        decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
      />

      <Shaders meshRef={meshRef} />

      <pointLight position={[2, 0, 2]} color={"#fff"} intensity={1} />
      <pointLight position={[-3, -3, -2]} color={"#00f"} intensity={5} />
      <pointLight position={[3, -2, 1]} color={"orange"} intensity={5} />
    </Canvas>
  );
};
export default CanvasComponent;
