// pages/videos/[videotitle].jsx

import React, { useState, useEffect } from "react";
import Plyr from "plyr-react";
import { useRouter } from 'next/router';
import { videoHomePage } from "../../Service/Services"; // Adjust the import path according to your project structure
import DoctorProfile from "../../Components/DoctorProfile";
import {
  BookAppointmentFixedbar,
  SpecificVideoWrapper,
} from "../../styles/SpecificVideo";

import LeadGenerationForm from "../../components/common/Lead-Generation";
import RenderModalOrBottomSheet from "../../components/common/RenderModalBS";
import { Flex } from "../../styles/CommonStyles";

import { Description } from "../../styles/CommonStyles";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown , faAngleUp } from '@fortawesome/free-solid-svg-icons'
import NavBar from "../../Components/NavBar";

const SpecificVideo = ({ videoData }) => {
  const router = useRouter();
  const { videotitle } = router.query;
  const [url, setUrl] = useState(videoData.link || "");
  const [data, setData] = useState(videoData || null);
  const [isBtsVisible, setShowBts] = useState(false);

  
  //useState for status of video description
  const [isExpanded, setIsExpanded] = useState(false);

  //function to toggle video description
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  //State to store question and answers fetched from api
  const [qaData, setQaData] = useState([]);

  //state to track which question does user wants to view
  const [visibleIndex, setVisibleIndex] = useState(null);

  //answer toggle
  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
  

  useEffect(() => {
    if (videotitle && !data) {
      fetchVideoData();
    }
  }, [videotitle]);

  const fetchVideoData = async () => {
    const videoTitle2 = videotitle.split("-").join(" ");
    const responseJson = await videoHomePage(videoTitle2);
    setData(responseJson.data.data[0]);
    setUrl(responseJson.data.data[0].link);

       //demo data of question and answers
       const demoData = [
        { question: 'How does diabetes affect life?', answer: 'Damage to large (macrovascular) and small (microvascular) blood vessels, which can lead to heart attack, stroke, and problems with the kidneys, eyes, gums, feet and nerves.' },
        { question: 'Can spondylosis be cured?', answer: 'This is a chronic condition, which means there no affect your quality of life.' },
        { question: 'Can tooth cavities be fixed?', answer: 'A cavity is permanent damage that a dentist has to repair with a filling.' },
      ];
  
      console.log(demoData);
      setQaData(demoData);
  };

  const handleAppointmentBts = () => {
    document.querySelector(".widget-visible").setAttribute("style", "display:none !important");
    setShowBts(true);
  };

  const maxTitleLength = 50;
  const maxDescriptionLength = 150;

  const truncate = (str, maxLength) => {
    if (!str) return '';
    return str.length > maxLength ? str.substring(0, maxLength - 3) + '...' : str;
  };

  const title = truncate(data?.title, maxTitleLength);
  const description = truncate(data?.description, maxDescriptionLength);

  return (
    <>


    <NavBar/>
      <SpecificVideoWrapper justifyContent="center">
        <div className="videoDetails">
          {url.length > 0 && (
            <Plyr
              source={{
                type: "video",
                sources: [
                  {
                    src: url,
                    provider: "youtube",
                  },
                ],
              }}
            />
          )}
            <h1 className="h1">{data?.title}</h1>

<Description>
<div className="description-container">
  <p className={isExpanded ? 'description expanded' : 'description collapsed'}>
    {data?.description}
  </p>
  <button onClick={toggleDescription}>
    {isExpanded ? <FontAwesomeIcon icon={faAngleUp} /> :  <FontAwesomeIcon icon={faAngleDown} /> }
  </button>
  
</div>
</Description>
          <DoctorProfile doctorid={data?.doctorId} subprofile={true} />
        </div>
        <div className="leadFormWrapper">

        <div className="qa-container">
            <h1 className="h2">Important questions <br /> answered in this video</h1>
            {qaData.map((item, index) => (
              <div key={index} className="qa-item">
                
                <div className="question-container" onClick={() => toggleAnswer(index)}>
                  <h3 className="question h3">
                    {item.question}
                  </h3>
                    {visibleIndex === index ? 
                      <FontAwesomeIcon icon={faAngleUp} /> :  
                      <FontAwesomeIcon icon={faAngleDown} /> 
                    }
                </div>
                
                {visibleIndex === index && (
                  <p className="answer">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="leadForm">
            <LeadGenerationForm
              title="Want to book appointment with doctor?"
              doctorid={data?.doctorId}
            />
          </div>
        </div>
      </SpecificVideoWrapper>
      <BookAppointmentFixedbar onClick={handleAppointmentBts}>
        Book Appointment Now
      </BookAppointmentFixedbar>
      <RenderModalOrBottomSheet
        isVisible={isBtsVisible}
        onClose={() => {
          document.querySelector(".widget-visible").setAttribute("style", "display:block !important");
          setShowBts(false);
        }}
      >
        <Flex padding="20px">
          <LeadGenerationForm
            title="Want to book appointment with doctor?"
            doctorid={data?.doctorId}
          />
        </Flex>
      </RenderModalOrBottomSheet>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { videotitle } = context.params;
  const videoTitleFormatted = videotitle.split("-").join(" ");
  const responseJson = await videoHomePage(videoTitleFormatted);

  return {
    props: {
      videoData: responseJson.data.data[0], // Assuming the response contains the data array as described
    },
  };
};

export default SpecificVideo;
