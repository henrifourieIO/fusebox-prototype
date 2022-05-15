import {SobelOperatorShader} from "three/examples/jsm/shaders/SobelOperatorShader";
import {LuminosityShader} from "three/examples/jsm/shaders/LuminosityShader";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";

function EffectGrayScale() {
  const effectGrayScale = new ShaderPass(LuminosityShader);

  return <>{effectGrayScale}</>;
};

function EffectSobel() {
  let effectSobel = new ShaderPass(SobelOperatorShader);
  effectSobel.uniforms["resolution"].value.x =
    window.innerWidth * window.devicePixelRatio;
  effectSobel.uniforms["resolution"].value.y =
    window.innerHeight * window.devicePixelRatio;
};

extend({ EffectSobel })

const SobelShader = () => {
  return (
    <>
      <EffectGrayScale />
      <EffectSobel />
    </>
  );
};

export default SobelShader;
