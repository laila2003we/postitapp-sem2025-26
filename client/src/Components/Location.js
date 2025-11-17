import React, { useState, useEffect } from "react";
import axios from "axios";

const Location = () => {
  const [ip, setIp] = useState(null); // State to hold the IP address
  const [geoData, setGeoData] = useState(null); // State to hold geolocation data
  const [currency, setcurrency] = useState("");
  const [languages, setlanguages] = useState("");
  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIp(response.data.ip); // Set the IP address in state
    } catch (error) {
      console.error("Error fetching IP address:", error.message);
    }
  };
  const getGeoLocationData = async () => {
    if (!ip) return; // Ensure IP is available before making the request
    try {
      const response = await axios.get(`http://ip-api.com/json/${ip}`);
      setGeoData(response.data); // Set geolocation data in state
      var country = geoData.country;
      var ISP = geoData.ISP;
      if (geoData.city == "Salalah") {
        setlanguages("Gabali");
      } else if (geoData.city == "Muscat") {
        setlanguages("Arabic");
      }

      console.log("GeoLocation Data:", response.data);
    } catch (error) {
      console.error("Error fetching geolocation data:", error.message);
    }
    // Fetch the IP address when the component is loaded
  };
  useEffect(() => {
    fetchIpAddress();
  }, []);

  // Fetch geolocation data when the IP is updated

  useEffect(() => {
    if (ip) {
      getGeoLocationData();
    }
  }, [ip]);

  return (
    /* <p>Ip address : {ip}</p>
      <p>City: {geoData.city}</p>
      <p> Region: {geoData.region}</p>
      <p>Currency: {currency}</p> */
    <div className="location">
      <p>Location Information</p>
      {ip ? <p>IP Address: {ip}</p> : <p>Loading IP address...</p>}
      {geoData ? (
        <div>
          Country: {geoData.country}
          <br />
          Region: {geoData.region}
          <br />
          Languages: {languages}
        </div>
      ) : (
        <p>Loading Geolocation Data...</p>
      )}
    </div>
  );
};

export default Location;
