import React, { useEffect, useState } from "react";
import ShareButton from "./button";

const PDFShareLink = ({ document, fileName }) => {
    const [url, setUrl] = useState(null);
  
    useEffect(() => {
      const getPdf = async () => {
        const pdfBase64 = document;
        setUrl(`data:application/pdf;base64,${pdfBase64}`);
      };
  
      getPdf();
    }, [document]);
  
    return url ? <ShareButton url={url} /> : null;
  };

  export default PDFShareLink;