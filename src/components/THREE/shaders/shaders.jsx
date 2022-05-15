import {
  EffectComposer,
  Noise,
  Vignette,
  Bloom,
  Scanline,
  ChromaticAberration,
  Glitch,
} from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";

const Shaders = ({ meshRef }) => {
  return (
    <>
      <EffectComposer>
        <Noise opacity={0.5} blendFunction={BlendFunction.REFLECT} />
        <Vignette eskil={false} offset={0.25} darkness={1.1} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.02, 0.002]} // color offset
        />
        <Scanline
          blendFunction={BlendFunction.OVERLAY} // blend mode
          density={1.25} // scanline density
        />
        {/* <Glitch
          delay={[2, 4, 3, 5, 1, 7]} // min and max glitch delay
          duration={[0.6, 1.0]} // min and max glitch duration
          strength={[0.1, 0.1]} // min and max glitch strength
          mode={GlitchMode.SPORADIC} // glitch mode
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={0.3} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        /> */}
      </EffectComposer>
    </>
  );
};

export default Shaders;
