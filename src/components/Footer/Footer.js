import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <Card className="footer text-center">
      <Card.Header className="bar">
        <Card.Title style={{ color: "white" }}>SUIVEZ-NOUS SUR :</Card.Title>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/BanqueNationaleAgricole/?id_article=127"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlinedIcon className="fb" />
          </a>
          <a
            href="https://www.instagram.com/bna.bank/?fbclid=IwAR0lGZzJQn5YvIXHoANbanXd1UaZwTp-r6cRb3MwH149iYLhsy_2qFbjuv8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/bnabank?fbclid=IwAR3cqZmPRFws5uH6mtZN4UFR9Yq7AiD1375n-Nxigt5-dIbSUqvjr1P84DA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="linkedin" />
          </a>
        </div>
      </Card.Header>
      <Card.Body>
      </Card.Body>
    </Card>
  );
}

export default Footer;
