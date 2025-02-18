"use client"
import dynamic from "next/dynamic";
import 'react-quill-new/dist/quill.snow.css';
// import ReactQuill from 'react-quill-new';
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CustomQuill = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "code-block"],
    ],
  };

  return (
    <div className="">
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      theme="snow"
    />
    </div>
  );
};

export default CustomQuill;