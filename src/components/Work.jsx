import React from 'react';
import './Work.css';
import { FaFilePdf } from 'react-icons/fa';
import { FaFileZipper } from "react-icons/fa6";

const PDF_FILE_URL ='http://localhost:3000/File.pdf';
const ZIP_FILE_URL ='http://localhost:3000/Fzip.pdf';
const Work = () => {
    const downloadFileAtUrl=(url) => {
        fetch(url).then(response => response.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob ([blob]));
            const fileName = url.split('/').pop()
            const aTag = document.createElement('a');
            aTag.href = blobURL;
            aTag.setAttribute('download',fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        }) 
    }
  return (
    <div name='work' className='dd'>
      <div className='container4'>
            <div className='dii'>
                <p className='p20'>
                    Resources
                </p>
                <p className='p21'>Lets Download!! Elevate Your Path</p>
            </div>
            <div style={{ display: "flex" }}>
                <FaFilePdf style={{ fontSize: "25px", color: "darkpurple" }}/>
                <p style={{ textAlign:"left", marginLeft: "1rem", fontFamily: "Roboust", fontSize: "25px", color: "purple" }}>Web - Dev Syllabus:</p>
                <button style={{ textAlign:"left", marginLeft: "1rem" }} onClick={() => (downloadFileAtUrl(PDF_FILE_URL))}>Download Resource PDF </button>
            </div>
            <div style={{ display: "flex" }}>
                <FaFileZipper style={{ fontSize: "25px", color: "darkpurple" }}/>
                <p style={{ textAlign:"left", marginLeft: "1rem", fontFamily: "Roboust", fontSize: "25px", color: "purple" }}>Web - Dev Syllabus:</p>
                <button onClick={() => (downloadFileAtUrl(ZIP_FILE_URL))}>Download Resource ZIP </button>
            </div>
            </div>
  </div>
  );
};

export default Work;
