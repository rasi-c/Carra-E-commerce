import React, { useContext, useRef } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import { BillDivision } from "./invoice";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./bill.css";

export function Invoice() {
  const secondArray = useContext(MyContext);
    const addressArray = secondArray.cart1;
    const contentRef = useRef(null);

  const downloadPDF = () => {
    const input = contentRef.current;
    const contentWidth = input.offsetWidth;
    const contentHeight = input.offsetHeight;

    html2canvas(input, { width: contentWidth, height: contentHeight })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: contentWidth > contentHeight ? 'landscape' : 'portrait',
          unit: 'px',
          format: [contentWidth, contentHeight],
        });
        pdf.addImage(imgData, 'PNG', 0, 0, contentWidth, contentHeight);
        pdf.save('content.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <>
      <div className="billContainer"> 
        {addressArray.length === 0 ? (
          <div className="notFount">
            <img src="https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?t=st=1712051682~exp=1712055282~hmac=896cb2dafb51f1946ade5b58c5316d3ee6f53f75d512eb59e0d688e13a24edbf&w=740" alt="" />
            <h3 style={{fontSize:'clamp(12px, 1.7vw, 24px)'}}>Please Select a Product First ...!</h3>
            <Link to="/product"><button type="button" className="btn btn-warning">Go to Products</button></Link>
          </div>
        ) : (
          <div ref={contentRef} style={{width:'60%', height:'auto'}} className="BillUpperDivision">
            <BillDivision />
          </div>
        )}
      </div>
      {addressArray.length > 0 && <button type="submit" onClick={downloadPDF}>Download Bill</button>}    
    </>
  );  
  
}
