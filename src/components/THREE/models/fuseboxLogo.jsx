import React, { useRef, useState, useEffect } from "react";
import { Select, useGLTF } from "@react-three/drei";
import { addEffect } from "@react-three/fiber";
import {
  EffectComposer,
  Selection,
  Select as PostSelect,
  Outline,
} from "@react-three/postprocessing";

export default function FuseBoxLogoModel({meshRef}) {
  const { nodes, materials } = useGLTF("/fusebox-logo.glb");

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      const posX = mouseX - innerWidth / 2;
      const posY = mouseY - innerHeight / 2;

      setMouseX(posX / (innerWidth * 2));
      setMouseY(posY / (innerHeight * 2));
    });
  }, []);

  return (
    <group ref={meshRef} dispose={null} rotation={[1.65, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        position={[mouseX / 2, 0, mouseY / 2]}
        scale={30}
      >
        <meshStandardMaterial color={"#666"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/fusebox-logo.glb");
