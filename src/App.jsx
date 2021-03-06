import Preloader from "./components/preloader";
import Background from "./components/background";
// import CanvasComponent from "./components/THREE/canvas";
import Hero from "./components/hero";
import Menu from "./components/menu";
import MouseFollower from "./components/mouseFollower";
import CustomCursorManager from "./components/mouseFollower/context/manager";
import { Suspense } from "react";
import { useEffect, useState, lazy } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(true);
  const CanvasComponent = lazy(() => import("./components/THREE/canvas"));
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <CustomCursorManager>
        <Preloader loading={loading} open={open} setOpen={setOpen} />
        <Suspense fallback={null}>
          <MouseFollower />
          {!open ? (
            <>
              <Menu />
              <Background />
              <Hero />
            </>
          ) : null}
          <CanvasComponent />
        </Suspense>
      </CustomCursorManager>
    </>
  );
}

export default App;
