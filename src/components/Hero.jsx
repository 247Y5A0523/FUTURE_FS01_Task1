export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center h-screen bg-gray-100"
    >
      <h1 className="text-5xl font-bold text-blue-600">Hi, I’m [Nagendhar]</h1>
      <p className="mt-4 text-xl text-gray-700">
        Aspiring Web Developer | Building Creative & Professional Websites
      </p>
      <a
        href="/resume.pdf"
        download
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  );
}
