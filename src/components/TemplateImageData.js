import React from "react";
import styled from "styled-components";
import IconPinSharp from "../icons/locationPin";
import Calendar from "../icons/calendar";

const TemplateImageData = ({ formData }) => {
  return (
    <TemplateData>
      <span
        style={{
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "leagueSpartan",
        }}
      >
        SCHOOL OF ENGINEERING AND TECHNOLOGY
      </span>

      <span
        style={{
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "Lanzord",
        }}
      >
        DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
      </span>

      <span
        style={{
          fontSize: 28,
          fontFamily: "belleza",
          marginTop: 8,
        }}
      >
        in association with
      </span>

      <span
        style={{
          fontSize: 44,
          fontWeight: "bold",
          fontFamily: "leagueSpartan",
          marginTop: 3,
        }}
      >
        ASCII
      </span>

      <span
        style={{
          fontSize: 28,
          fontFamily: "belleza",
        }}
      >
        presents
      </span>

      <span
        style={{
          fontSize: 40,
          fontWeight: "bold",
          fontFamily: "Lanzord",
          marginBottom: 3,
        }}
      >
        ALUMNI TECH TALK SERIES
      </span>

      <span
        style={{
          fontSize: 20,
          fontFamily: "Lanzord",
        }}
      >
        on
      </span>

      <span
        style={{
          fontSize: 30,
          fontWeight: "bold",
          fontFamily: "Lanzord",
        }}
      >
        "{formData.topic}"
      </span>

      <UserImage alt={"preview"} src={formData.image} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Lanzord",
          fontSize: 24,
        }}
      >
        <span>{formData.name}</span>
        <span>{formData.position}</span>
        <span>{formData.institute}</span>
        <span>{formData.location}</span>
      </div>

      <div
        style={{
          marginBottom: 20,
          paddingBottom: 10,
          fontSize: 16,
          fontFamily: "Lanzord",
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          fontWeight: "bold",
          gap: 6,
          textTransform: "uppercase",
        }}
      >
        <div>
          <IconPinSharp />
          <span style={{ marginLeft: 8 }}>{formData.venue}</span>
        </div>

        <div>
          <Calendar />
          <span style={{ marginLeft: 8 }}>{formData.dateTime}</span>
        </div>
      </div>
    </TemplateData>
  );
};

export default TemplateImageData;

const UserImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 30%;
  margin: 20px;
`;

const TemplateData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  line-height: 1.5;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  color: black;
`;
