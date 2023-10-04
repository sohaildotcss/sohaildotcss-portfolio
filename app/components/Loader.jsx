import "../loader.css";
function Loader() {
  return (
    <>
      <div className="loader absolute h-screen w-screen bg-[#141517]">
        <div className="wrapper transition-all w-full h-full flex justify-center items-center font-light text-6xl tracking-tighter text-slate-200">
          <h1>Hello</h1>
          <h1>Bonjour</h1>
          <h1>स्वागत हे</h1>
          <h1>Ciao</h1>
          <h1>Olá</h1>
          <h1>おい</h1>
          <h1>Hallå</h1>
          <h1>Hallo</h1>
        </div>
      </div>
    </>
  );
}

export default Loader;
