import React from "react";
import { InfoDisplay } from "../components/InfoDisplay";

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md m-8 -mt-12">
        <div className="flex justify-center items-center">
          <div className="flex gap-[5px] items-center m-6">
            <h1 className="text-2xl font-bold">Home Page</h1>
            <InfoDisplay
              title="Welcome to the Home Page"
              description="Get a comprehensive overview of the application."
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
        <p className="text-lg text-gray-600 flex justify-center mb-4">
          Thanks for visiting. Here's a brief introduction to our platform.
        </p>
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
          <h2 className="text-lg font-semibold mb-2">Our Motto</h2>
          <ul className="list-disc pl-4">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
