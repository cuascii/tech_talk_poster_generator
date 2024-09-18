import React, { useRef } from "react";
import styled from "styled-components";
import exportImage from "../utils/exportAsImage";
import TemplateImageData from "./TemplateImageData";

const TemplateContainer = ({ formData, image }) => {
  const exportRef = useRef();

  return (
    <Container>
      <TemplateContainerBlock ref={exportRef} image={image}>
        <TemplateContents>
          <LogosHeader>
            <ASCIIImage src={"/images/ascii-logo.png"} alt="ascii" />
            <CHRISTImage src={"/images/christ-logo.png"} alt="christ" />
          </LogosHeader>

          <TemplateImageData formData={formData} />
        </TemplateContents>
      </TemplateContainerBlock>
      <DownloadButton onClick={() => exportImage(exportRef.current, "test")}>
        Download Image
      </DownloadButton>
    </Container>
  );
};

export default TemplateContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-clip-box: content-box;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #343532;
  color: white;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const TemplateContainerBlock = styled.div`
  background-image: url("/images/background.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 1000px; // 2000px
  width: 707px; // 1414px
  margin: 20px;
`;

const TemplateContents = styled.div`
  padding: 20px;
`;

const LogosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4;
`;

const ASCIIImage = styled.img`
  max-height: 250px;
  max-width: 150px;
  object-fit: contain;
`;

const CHRISTImage = styled.img`
  max-width: 275px;
  max-height: 250px;
  object-fit: contain;
  margin-left: auto;
  margin-right: -10px;
`;

const DownloadButton = styled.button`
  background-color: #f1c40f;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;
