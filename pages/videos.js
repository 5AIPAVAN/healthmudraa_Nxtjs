import React from 'react'
import Videos from '../Components/Videos'
import { userHomePage } from "../Service/Services";
import NavBar from '../Components/NavBar'
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    try {
      console.log("Running getServerSideProps...");
      const response = await userHomePage();
      console.log("RESS"+response.data);
  
      if (response?.data?.status) {
        return {
          props: {
            videosdata: response.data.data,
          },
        };
      } else {
        console.log("Data fetch failed:", response.data);
        return {
          props: {
            videosdata: [],
            error: response.data?.message || "Failed to fetch data",
          },
        };
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return {
        props: {
            videosdata: [],
          error: "Failed to fetch data"+error.message,
        },
      };
    }
  }
  

export default function videos({ videosdata, error }) {
    console.log("Component props:", { videosdata, error });

    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return <><NavBar/><Videos videos={videosdata} /></>;
  
}
