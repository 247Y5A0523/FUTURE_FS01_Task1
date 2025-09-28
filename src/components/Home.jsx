function Home() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <img src="/profile.jpg" alt="profile" className="w-32 h-32 rounded-full mb-6" />
      <h1 className="text-4xl font-bold">Hi, I'm Konda Nagendhar 👋</h1>
      <p className="mt-4 text-lg text-gray-300">
        B.Tech CSE Student | Full Stack Developer | Data Analytics Enthusiast
      </p>
      <a href="/resume.pdf" download className="mt-6 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold">
        Download Resume
      </a>
    </section>
  );
}

export default Home;
