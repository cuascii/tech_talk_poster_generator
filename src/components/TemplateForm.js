import React from "react";
import styled from "styled-components";
import { TemplateFormData as data } from "../utils/TemplateFormData";

const TemplateForm = ({
  setTopic,
  setImage,
  setName,
  setPosition,
  setInstitute,
  setLocation,
  setVenue,
  setDateTime,
  formData,
  setShowImage,
}) => {
  const onSubmit = () => {
    setShowImage(true);
  };

  return (
    <Container>
      <FormContainer>
        <Header>Enter the details required to generate the image</Header>
        {data.map((d, i) => (
          <InputForm key={i}>
            <InputLabel>{d.title}</InputLabel>
            {d.tag === "image" ? (
              <Input
                type={d.type}
                accept=".png, .jpeg, .jpg"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }
                }}
              />
            ) : (
              <Input
                type={d.type}
                value={
                  d.tag === "topic"
                    ? formData.topic
                    : d.tag === "name"
                    ? formData.name
                    : d.tag === "position"
                    ? formData.position
                    : d.tag === "institute"
                    ? formData.institute
                    : d.tag === "location"
                    ? formData.location
                    : d.tag === "venue"
                    ? formData.venue
                    : formData.dateTime
                }
                onChange={(e) => {
                  d.tag === "topic"
                    ? setTopic(e.target.value)
                    : d.tag === "name"
                    ? setName(e.target.value)
                    : d.tag === "position"
                    ? setPosition(e.target.value)
                    : d.tag === "institute"
                    ? setInstitute(e.target.value)
                    : d.tag === "location"
                    ? setLocation(e.target.value)
                    : d.tag === "venue"
                    ? setVenue(e.target.value)
                    : setDateTime(e.target.value);
                }}
              />
            )}
          </InputForm>
        ))}
        <InputButton onClick={onSubmit}>Submit</InputButton>
      </FormContainer>
    </Container>
  );
};

export default TemplateForm;

const Container = styled.div`
  height: max-content;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #616161;
  gap: 4px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

const InputLabel = styled.label`
  font-size: large;
  font-weight: bold;
  padding: 5px;
`;

const Input = styled.input`
  outline: none;
  padding: 5px;
  border-radius: 10px;
  border-color: transparent;
`;

const Header = styled.div`
  font-size: xx-large;
  font-weight: bold;
  padding: 10px;
  word-wrap: break-word;
`;

const InputButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border-color: transparent;
  background-color: #f50057;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: fit-content;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ff4081;
  }
  &:active {
    background-color: #c51162;
  }
`;
