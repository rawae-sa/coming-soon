import PixelBlast from "@/component/PixelBlast";
import ShapeGrid from "@/component/ShapeGrid";

export default function Home() {
  return (
    <section className="w-full h-full font-primary">
      <div
        style={{ width: "100%", height: "100%", position: "absolute" }}
        className=""
      >
        <ShapeGrid
          className="opacity-80 z-10"
          speed={0.1}
          squareSize={80}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#050505"
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
          className="text-3xl max-w-lg text-center leading-relaxed font-medium text-lime-100"
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
