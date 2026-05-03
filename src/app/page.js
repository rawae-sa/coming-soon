import PixelBlast from "@/component/PixelBlast";
import ShapeGrid from "@/component/ShapeGrid";

export default function Home() {
  return (
    <section className="w-full h-full font-primary">
      <div
        style={{ width: "100%", height: "100%", position: "absolute" }}
        className="z-0 opacity-30 "
      >
        {/* <PixelBlast
          variant="square"
          pixelSize={10}
          color="#667434"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.1}
          edgeFade={0.25}
          transparent
        />*/}

        <ShapeGrid
          speed={0.1}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#2F293A"
          hoverFillColor="#222"
          shape="square" // square, hexagon, circle, triangle
          hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
          hoverColor="#222222"
          size={38}
        />
      </div>
      <div className=" flex flex-col items-center h-dvh justify-center gap-20 p-4 z-50">
        <video className="h-60 w-60 filter saturate-150" autoPlay muted loop>
          <source src="rawaeAscii.webm" type="video/webm" />
        </video>

        <p
          dir="rtl"
          className="text-3xl max-w-lg text-center leading-relaxed font-medium text-lime-100/80"
        >
          نحن نبني مساحة تُصنع فيها اللحظات الهادفة والتجارب التي لا تُنسى...
        </p>

        <h1 className="font-bold text-sm opacity-30 absolute bottom-10 text0">
          RAWA&apos;E
        </h1>
      </div>
    </section>
  );
}
