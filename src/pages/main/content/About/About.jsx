/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";

import {
  PerspectiveCamera,
  SheetProvider,
  useCurrentSheet,
} from "@theatre/r3f";
import {
  Html,
  OrbitControls,
  ScrollControls,
  useScroll,
  Scroll,
} from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import mgan from "./mgznimz.json";
import { Working } from "../../../../models/Working";
import Main from "./content/Main/Main";
import { Suspense, useEffect } from "react";
import Aos from "aos";
import Loader from "../../../../components/loaders/Loader";
const About = () => {
  const sheet = getProject("Fly Througth", { state: mgan }).sheet("Scene");
  Aos.init();
  return (
    <div className="w-full h-screen">
      <Canvas className="canvas" gl={{ preserveDrawingBuffer: true }}>
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <ScrollControls pages={8} damping={1} maxSpeed={1}>
            <SheetProvider sheet={sheet}>
              <Scenne />
            </SheetProvider>
            <Scroll html>
              <Main />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};
export default About;

function Scenne(parameters) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });
  return (
    <>
      <color attach="background" args={["white"]} />
      <ambientLight intensity={2} />
      <directionalLight position={[0, 10, 0]} />
      <Working />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 10, 10]}
        fov={50}
        near={1}
        far={70}
      />
      {/* <axesHelper />
      <gridHelper /> */}
    </>
  );
}
