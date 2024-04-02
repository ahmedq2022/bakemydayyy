import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";

const Footer = () => {
  return (
    <div
      style={{
        paddingBlock: "100px",
        backgroundColor: "#F16A6A",
        marginTop: "auto"
      }}
      id="section-5"
    >
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <FacebookIcon sx={{ color: "white", fontSize: "40px" }} />
        <WhatsAppIcon sx={{ color: "white", fontSize: "40px" }} />
        <TwitterIcon sx={{ color: "white", fontSize: "40px" }} />
        <ShareIcon sx={{ color: "white", fontSize: "40px" }} />
      </Box>
      <Typography
        variant="h6"
        sx={{ textTransform: "capitalize", textAlign: "center", m: 3 }}
      >
        @2023 MAQ | All Rights Reserved
      </Typography>
    </div>
  );
};

export default Footer;
