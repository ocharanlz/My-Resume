import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

const Resume = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-4" id="resume">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Lezil Orgasa</h2>

        
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-lg">
            I am a Student Developer with a passion for building modern and
            responsive web applications. I have experience in both front-end and
            back-end development and specialize in JavaScript, React, and Node.js.
          </p>
        </section>

   
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaJs className="text-yellow-500 text-4xl mb-2" />
              <p className="text-lg">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-500 text-4xl mb-2" />
              <p className="text-lg">React</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-green-600 text-4xl mb-2" />
              <p className="text-lg">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-blue-400 text-4xl mb-2" />
              <p className="text-lg">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-orange-500 text-4xl mb-2" />
              <p className="text-lg">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-blue-600 text-4xl mb-2" />
              <p className="text-lg">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase className="text-gray-700 text-4xl mb-2" />
              <p className="text-lg">SQL</p>
            </div>
            <div className="flex flex-col items-center">
              <SiVite className="text-violet-700 text-4xl mb-2" />
              <p className="text-lg">Vite</p>
            </div>
          </div>
        </section>

        
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">Student Developer</h4>
              <p className="text-lg">Student Skills</p>
              <ul className="list-disc pl-6">
                <li className="text-lg">Built and maintained full-stack web applications.</li>
                <li className="text-lg">Collaborated with cross-functional teams on projects.</li>
                <li className="text-lg">Developed REST APIs and integrated third-party services.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">EMAIL</h4>
              <li className="text-lg">lezilorgasa@gmail.com</li>
              <h4 className="text-xl font-semibold">Facebook</h4>
              <li className="text-lg">Lezil Orgasa</li>
              <h4 className="text-xl font-semibold">Contact</h4>
              <li className="text-lg">+639104356217</li>
              <h4 className="text-xl font-semibold">Birthday</h4>
              <li className="text-lg">February 07, 2005</li>
              <h4 className="text-xl font-semibold">Location</h4>
              <li className="text-lg">Legazpi City, Albay</li>
              <ul className="list-disc pl-6">
              </ul>
            </div>
          </div>
        </section>

        
        <section>
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div>
            <h4 className="text-xl font-semibold">Bachelor of Science in Information Technology</h4>
            <p className="text-lg">Computer Arts And Technological College, Inc</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;