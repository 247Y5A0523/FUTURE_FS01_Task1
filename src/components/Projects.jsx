function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">

        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Quick Setting Cement</h3>
          <p className="text-gray-300 mt-2">
            Studied the preparation, properties, and applications of quick setting cement in construction works.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">FBP WildFire Danger Forecasting</h3>
          <p className="text-gray-300 mt-2">
            Developed a deep learning-based wildfire forecasting model using location-aware Adaptive Normalization.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
