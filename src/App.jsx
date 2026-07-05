import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div
        id="task-manager-page"
        className="min-h-screen bg-linear-to-br from-cyan-200 via-white to-emerald-200 p-4 md:p-8"
      >
        <div id="task-manager" className="max-w-5xl mx-auto">
          <Header />
        </div>
      </div>
    </>
  );
};

export default App;
