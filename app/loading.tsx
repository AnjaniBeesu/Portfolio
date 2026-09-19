export default function Loading() {
  return (
    <main className="loader-screen">
      <div className="loader" aria-hidden="true">
        <span><span></span><span></span><span></span><span></span></span>
        <div className="base"><span></span><div className="face"></div></div>
      </div>
      <div className="longfazers" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
    </main>
  );
}
