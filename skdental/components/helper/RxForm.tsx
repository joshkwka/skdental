import { FaDownload } from "react-icons/fa";

const RxForm = () => {
  return (
    <a
      href="/files/RX-FORM-Richmond.pdf"
      // href="/files/RX-FORM-Vancouver-3A2.pdf"
      download
      className="inline-flex items-center hover:underline"
      aria-label="Download RX Form"
    >
      <span>Rx Form</span>
      <FaDownload className="ml-2" />
    </a>
  );
};

export default RxForm;
