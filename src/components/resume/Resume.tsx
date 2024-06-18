'use client';
import { Worker, Viewer, ViewMode } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import packageJson from '@/../package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
    >
      <Viewer
        fileUrl={'/resume/Jay_Resume.pdf'}
        plugins={[defaultLayoutPluginInstance]}
        viewMode={ViewMode.SinglePage}
        theme={'dark'}
        defaultScale={1}
      />
    </Worker>
  );
};
export default Resume;
