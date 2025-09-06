import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, fileSrc, fileType = "pdf" }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    {/* Background overlay */}
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />

    {/* Modal content wrapper */}
    <div className="fixed inset-0 flex items-center justify-center p-6">
      <Dialog.Panel className="relative w-full max-w-3xl rounded-2xl bg-gray-900 p-6 shadow-xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal title */}
        {title && (
          <Dialog.Title className="text-lg font-bold text-white text-center mb-2">
            {title}
          </Dialog.Title>
        )}

        {/* File preview */}
        {fileType === "pdf" ? (
          <embed
            src={`${fileSrc}#toolbar=0&navpanes=0&scrollbar=0`}
            type="application/pdf"
            className="w-full h-[70vh] rounded"
          />
        ) : (
          <img
            src={fileSrc}
            alt={title}
            className="w-full h-auto max-h-[70vh] object-contain rounded"
          />
        )}
      </Dialog.Panel>
    </div>
  </Dialog>
);

export default Modal;
