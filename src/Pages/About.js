import React from "react";
import { InfoDisplay } from "../components/InfoDisplay";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-xl m-8 -mt-12">
        <div className="flex justify-center items-center">
          {/* <h1 className="text-2xl font-bold mb-4">Home page</h1> */}

          <div className="flex gap-[5px] items-center m-6">
            <h1 className="text-2xl font-bold">About Us</h1>
            <InfoDisplay
              title="Welcome to the About Us Page"
              description="Get a chance to know more about us."
            >
              <p className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </InfoDisplay>
          </div>
        </div>
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Our Team</h2>
          <ul className="list-disc pl-4">
            <li>Lorem Ipsum - CEO</li>
            <li>Lorem Ipsum - CTO</li>
            <li>Lorem Ipsum - Lead Developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
