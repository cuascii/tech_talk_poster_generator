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
        <InputForm>
          {data.map((d, i) => (
            <InputFormDiv key={i}>
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
                  placeholder={d.placeholder}
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
            </InputFormDiv>
          ))}
          <InputButton onClick={onSubmit}>Submit</InputButton>
        </InputForm>
      </FormContainer>
    </Container>
  );
};

export default TemplateForm;

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #343532;
  color: rgb(29, 22, 22);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const FormContainer = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 22px;
  color: white;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputFormDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  text-align: left;
  margin-bottom: 5px;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #555;
  color: white;
  flex-grow: 1;
  margin-left: 4px;
  outline: none;
  color: white;
`;

const InputButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #323b34;
  }
`;
