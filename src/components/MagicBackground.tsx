import MagicRings from "./MagicRings";

export default function MagicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05050a]">
      {/* Dark base */}
      <div className="absolute inset-0 bg-[#05050a]" />

      {/* MagicRings */}
      <div className="absolute inset-0 opacity-90">
        <MagicRings
          color="#fc42ff"
          colorTwo="#42fcff"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={0.72}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      {/* Dark readability overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Soft atmospheric gradients */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/[0.07] blur-[140px]" />

      <div className="absolute left-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="absolute right-[-180px] top-[45%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.045] blur-[130px]" />
    </div>
  );
}