import logo from "./logo.svg";
import "./App.css";
import Wave from "./Components/Wave";
import Animator from "./Components/Logo";
import { Canvas } from "react-three-fiber";
import Blob from "./Components/Blob";
import WelcomeIntro from "./Components/WelcomeIntro";
import Rocket from "./Designs/Rocket";
import { OrbitControls } from "@react-three/drei";
import "./Designs/Rocket.css";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Animator />
      <WelcomeIntro />
      <div
        style={{
          position: "absolute",
          zIndex: 999,
          left: 750,
          top: 0,
          height: "80vh",
          width: 900,
          display: "flex",
        }}
      >
        <Canvas height={100} color="green">
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 6]} intensity={3} />
          <Blob zoom="2.2" />
        </Canvas>
      </div>
      <Suspense fallback={null}>
        <div className="rocket-container">
          <Canvas height={100} color="green">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, -2, 2]} intensity={3} />
            <Rocket scale={4} />
          </Canvas>
        </div>
      </Suspense>
      <Wave />
    </>
  );
}

export default App;
