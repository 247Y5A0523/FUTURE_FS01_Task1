import React from "react";

function Resume() {
  return (
    <section id="resume" className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">My Resume</h2>
      <a
        href="/navyaares.pdf"
        download="Navya_Resume.pdf"
        className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Download Resume
      </a>

      <div className="mt-8 max-w-xl mx-auto text-left">
        <h3 className="text-xl font-semibold mb-4">Quick Overview</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Education:</strong> B.Tech in CSE (2021–2025)</li>
          <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js</li>
          <li><strong>Experience:</strong> Internship in Web Development</li>
          <li><strong>Certifications:</strong> Java, DBMS, Cloud Computing</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
