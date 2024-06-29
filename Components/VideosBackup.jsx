import React, { useEffect, useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import DoctorCard from "./DoctorCard";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { userHomePage } from "../Service/Services";
import toast from "react-hot-toast";
import { HMCard, VideoShareWrapper } from "./DoctorCard/DoctorCardStyles";
import { Flex, FlexCol } from "../styles/CommonStyles";
import { useNavigate } from "react-router-dom";
import RenderModalOrBottomSheet from "../Components/common/RenderModalBS";
import LeadGenerationForm from "../Components/common/Lead-Generation";

const Videos = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();
  const [isBtsVisible, setShowBts] = useState(false);
  const [doctorId, setDoctorId] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await userHomePage(searchTerm);
      if (response?.data.status) {
        setLoading(true);
        setDoctor(response.data?.data);
        console.log(response.data?.data);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(response.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const doctorDetails = async () => {
    const response = await userHomePage();
    if (response?.data.status) {
      console.log("doctorDetails-success");
      setLoading(true);
      setDoctor(response.data?.data);
      setLoading(false);
    } else {
      console.log("doctorDetails-failure");
      console.log(response);
      setLoading(false);
      toast.error(response.data?.message);
    }
  };

  const handleShareVideo = async (link) => {
    const webShareSupported =
      typeof window !== "undefined" ? "canShare" in window?.navigator : false;

    if (webShareSupported) {
      const data = {
        url: window.location.href,
        title: `Checkout this information health video ${link}!`,
        text: `Hey, I'd like to recommend Healthmudraa to learn more health related cure before going any pharma and avoid taking random medicines`,
      };
      if (navigator.canShare(data)) {
        try {
          await navigator.share(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.name, err.message);
          }
        } finally {
          return;
        }
      }
    } else {
      navigator.clipboard.writeText(link);
      toast.success("Copied link to share");
    }
  };

  useEffect(() => {
    doctorDetails();
  }, []);

  const handleAppointmentBts = (e, doctorId) => {
    document
      .querySelector(".widget-visible")
      .setAttribute("style", "display:none !important");
    setDoctorId(doctorId);
    setShowBts(true);
    e.stopPropagation();
    e.preventDefault();
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const displayedDoctors = doctor.slice(0, currentPage * itemsPerPage);

  return (
    <>
      {/* <Box display="flex" justifyContent="center" marginTop={"1rem"}>
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={handleSearch}>
                  <Search />
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{ width: "50vw", "@media (max-width: 600px)": { width: "90vw" } }}
        />
      </Box> */}
      <div className="container mt-3 ">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-12 text-center my-10">
              <h1 className="fw-bold" style={{marginBottom:'56px'}}>Expert Health Advice</h1>
            </div>
            {displayedDoctors.length > 0 &&
              displayedDoctors.map((item, idx) => (
                <div
                  key={idx}
                  className="col-lg-4 col-md-6 col-sm-12 col-12"
                  style={{ marginBottom: "20px", borderRadius: "12px" }}
                >
                  <HMCard
                    onClick={() => {
                      navigate(
                        `/videos/${decodeURIComponent(
                          item.title.split(" ").join("-").toString()
                        )}`
                      );
                    }}
                  >
                    <FlexCol>
                      <VideoShareWrapper>
                        {item.video.link.length > 0 && (
                          <Plyr
                            source={{
                              type: "video",
                              sources: [
                                {
                                  src: item.video.link,
                                  provider: "youtube",
                                },
                              ],
                            }}
                            options={{
                              controls: [
                                'play', // Play/pause playback
                                'progress', // The progress bar and scrubber for playback and buffering
                                'current-time', // The current time of playback
                                'mute', // Toggle mute
                                'volume', // Volume control
                                'settings', // Settings menu
                              ],
                            }}
                          />
                        )}
                      </VideoShareWrapper>

                      <DoctorCard
                        item={item}
                        videocode={item.title}
                        handleBtsModal={handleAppointmentBts}
                      />
                    </FlexCol>
                  </HMCard>
                </div>
              ))}
          </div>
        )}
      </div>
      {displayedDoctors.length < doctor.length && (
        <div className="text-center my-3">
          <Button className="my-10" variant="contained" color="primary" style={{backgroundColor:'#133682',borderRadius:'10px',marginTop:'50px'}} onClick={loadMore}>
            Watch More
          </Button>
        </div>
      )}
      <RenderModalOrBottomSheet
        isVisible={isBtsVisible}
        onClose={() => {
          setDoctorId("");
          document
            .querySelector(".widget-visible")
            .setAttribute("style", "display:block !important");
          setShowBts(false);
        }}
      >
        <Flex padding="20px">
          <LeadGenerationForm
            title="Want to book appointment with doctor?"
            doctorid={doctorId}
          />
        </Flex>
      </RenderModalOrBottomSheet>
    </>
  );
};

export default VideosBackup;
