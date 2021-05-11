import React, { useState } from "react";
import {
  AppBar,
  Container,
  Paper,
  TextField,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { COLORS } from "../colors";

export function CreateWallet() {
  const history = useHistory();
  const [mobile, setMobile] = useState(0);
  const [password, setPassword] = useState("");

  return (
    <>
      <AppBar elevation={0} position="static">
        <Toolbar
          variant="dense"
          style={{
            display: "flex",
            background: COLORS.BLACK,
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ color: COLORS.YELLOW }}
            onClick={() => {
              history.push("/my-wallet");
            }}
          >
            MY WALLET
          </Typography>

          <Button color="primary">English</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" style={{ padding: 32 }}>
        <Paper
          variant="outlined"
          elevation={2}
          style={{ padding: 32, width: 400 }}
        >
          <div className="df aic jcc fdc">
            <Typography variant="h6" align="center">
              Create a free account
            </Typography>
            <Typography variant="caption" align="center">
              Welcome to MyWallet
            </Typography>
          </div>

          <form style={{ marginTop: 32 }}>
            <TextField
              label="Mobile"
              variant="outlined"
              margin="dense"
              fullWidth
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="dense"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="df" style={{ marginTop: 32 }}>
              <CheckBox color="primary" style={{ marginRight: 16 }} />
              <Typography variant="caption">
                I have read and agree to the Terms of Service. MyWallet's Terms
              </Typography>
            </div>

            <Button
              style={{ marginTop: 32 }}
              color={"primary"}
              variant="contained"
              fullWidth
              // type="submit"
              onClick={() => {
                history.push("/my-wallet");
              }}
            >
              Create Account
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}
