import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from './Logo.png'

import "./Navs.css";
import LogIn from "../../Pages/LogInPages/LogIn";

const pages = [<a href="/" className="inscri" >Accueil</a>, <a href="/inscription" className="inscri" > inscription</a>, ];

function Navs() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="appBars" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <a href="/"> <img 
            width={"90px"}
            src={Logo}
          /></a>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <p className="B"> BANQUE NATIONALE AGRICOLE</p>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="titel-nav"
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Button>
            ))}
          </Box>
          <div className="box-log">
          <LogIn/>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navs;
