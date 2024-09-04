import TemplateForm from "../components/TemplateForm";
import { useState } from "react";
import TemplateContainer from "../components/TemplateContainer";

const TemplatePage = () => {
  const [showImage, setShowImage] = useState(false);
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [institute, setInstitute] = useState("");
  const [location, setLocation] = useState("");
  const [venue, setVenue] = useState("");
  const [dateTime, setDateTime] = useState("");

  const formData = {
    topic: topic,
    image: image,
    name: name,
    position: position,
    institute: institute,
    location: location,
    venue: venue,
    dateTime: dateTime,
  };

  return (
    <div>
      {!showImage ? (
        <>
          <TemplateForm
            formData={formData}
            setTopic={setTopic}
            setName={setName}
            setImage={setImage}
            setDateTime={setDateTime}
            setLocation={setLocation}
            setPosition={setPosition}
            setInstitute={setInstitute}
            setVenue={setVenue}
            setShowImage={setShowImage}
          />
        </>
      ) : (
        <>
          <TemplateContainer
            formData={formData}
            backgroundImage={"/images/background.png"}
          />
        </>
      )}
    </div>
  );
};

export default TemplatePage;
