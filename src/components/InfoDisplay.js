import { FcInfo } from "react-icons/fc";
import { FiInfo } from "react-icons/fi";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const InfoDisplay = ({ children, title, description }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <FcInfo className="cursor-pointer" onClick={openModal} />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[497px] transform overflow-hidden rounded-[10px] bg-white p-[30px] text-left align-middle shadow-xl transition-all font-inter">
                  <div className="my-10 flex w-full items-center justify-center">
                    <FiInfo className="text-5xl text-blue-primary" />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-5  font-bold mt-[2px] text-black font-inter text-center"
                  >
                    {title}
                  </Dialog.Title>
                  <Dialog.Description
                    as="p"
                    className="text-xs text-center font-medium text-black font-inter leading-5 px-2 "
                  >
                    {description}
                  </Dialog.Description>
                  <div className="mt-8 text-gray-children text-xs leading-[1.125rem] font-medium">
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
