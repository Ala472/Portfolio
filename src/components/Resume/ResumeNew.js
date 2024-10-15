import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Particle from "../Particle";
import pdf from "../../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { 
  MdNavigateNext,
  MdNavigateBefore 
} from "react-icons/md";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;



function ResumeNew() {

  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [showButtons, setShowButtons] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

      <Row className="resume">
        <div className="pdf-viewer-container">
        <Document 
        file={pdf} 
        onLoadSuccess={onDocumentLoadSuccess} 
        className="d-flex justify-content-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <div className="pdf-page-wrapper">
            <Page 
            pageNumber={pageNumber} 
            renderAnnotationLayer={false}
            renderTextLayer={false} 
            scale={width > 786 ? 1 : 0.6} />
            { showButtons && (<div className="button-container">
              <ButtonGroup className="buttonGroup" aria-label="controls button">
              <Button variant='light'  className="rounded-0" onClick={goToPreviousPage} disabled={pageNumber <= 1}>
                  <MdNavigateBefore className="navigatetoggle"/> 
                </Button>
                <Button variant='light'  disabled className="controlbutton">
                {pageNumber} of {numPages}
                </Button>
              <Button variant='light' className="rounded-0" onClick={goToNextPage} disabled={pageNumber >= numPages}>
                <MdNavigateNext className="navigatetoggle"/>  
              </Button>
            </ButtonGroup>
            </div>) }
          </div>
          </Document>
        </div>   
        </Row>
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <style type="text/css">
            {`
            .btn-flat {
              background-color: #9AEBA3;
              color: #03141d;
            }
            
            .btn-flat:hover {
              background-color: #083a50;
            }

            .btn-xxl {
              padding: 1rem 1rem;
              font-size: 1.2rem;
            }
            `}
          </style>
          <Button
            variant="flat"
            size="xxl"
            style={{ maxWidth: "250px"}}
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
