import React, { useState } from "react";
import "./SignIn.css";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Navs from "../../components/NavBars/Navs";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [textAlert, setTextAlert] = useState('');

  const handleChange = (key, value) => {
    if (key == 'username') {
      setUsername(value)
    } else {
      setPassword(value)
    }
  };

  const signup = () => {
    if (username && password) {
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        setError('')
        setTextAlert('')
                const url =`http://localhost/api/users/signup.php`;
                 axios.post(url, params).then((res) => {
                      const result = JSON.parse(res.data.substring(username.length  , res.data.length));
                      
                       console.log("result:", result);
                        if (result.status) {
                          setTextAlert(result.message)

                          //  setTimeout(() => {
                          //   // window.location.href = '/login';
                          //  }, 2000);
                        } else {
                          setError(result.message)
                        }
                 })
    }
}
  return (
    <div>
      <Navs />
      <div className="SignIn">
        <Typography
          gutterBottom
          variant="h3"
          marginTop={"1rem"}
          align="center"
     
        >
          inscription{" "}
        </Typography>
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Username"
                      label=" Username"
                      variant="outlined"
                      fullWidth
                      required
                      name="Username"
                      onChange={(e) => handleChange('username', e.target.value)}
                    />
                  </Grid>

          
          
                  <Grid item xs={12}>
                    <TextField
                      label="Mot De Passe"
                      type="password"
                      placeholder="Mot De Passe"
                      variant="outlined"
                      fullWidth
                      required
                      name="Mot De Passe"
                      onChange={(e) => handleChange('password', e.target.value)}
                    />
                  </Grid>
                  <div className="error">{error}</div>
                  <div className="success">{textAlert}</div>
                  <Grid item xs={12}>
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={signup}
                    >
                      {"submit "}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
      <Footer/>
    </div>
  );
}

export default SignIn;
