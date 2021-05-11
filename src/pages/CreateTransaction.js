import React, { useState } from "react";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Transaction } from "../blockchain/blockchain";

export function CreateTransaction({ myCoin, myKey }) {
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const myWalletuAddress = myKey.getPublic("hex");
  return (
    <div>
      <Container maxWidth="sm" style={{ padding: 32 }}>
        <Paper
          variant="outlined"
          elevation={2}
          style={{ padding: 32, width: 600 }}
        >
          <div className="df aic jcc fdc">
            <Typography variant="h6" align="center">
              Create Transaction
            </Typography>
          </div>

          <form style={{ marginTop: 32 }}>
            <TextField
              label="From address"
              variant="outlined"
              margin="dense"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={myWalletuAddress}
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="To address"
              variant="outlined"
              margin="dense"
              fullWidth
              value={toAddress}
              onChange={(e) => {
                setToAddress(e.target.value);
              }}
              style={{ marginBottom: 20 }}
            />
            <TextField
              id="outlined-number"
              label="Amount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              fullWidth
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              style={{ marginBottom: 20 }}
            />

            <Button
              style={{ marginTop: 32 }}
              color={"primary"}
              variant="contained"
              fullWidth
              // type="submit"
              onClick={() => {
                const tx = new Transaction(myWalletuAddress, toAddress, amount);
                tx.signTransaction(myKey);
                myCoin.addTransaction(tx);
                // const balance = myCoin.Instance.getBalanceOfAddress(
                //   myWalletuAddress
                // );
                // const balance2 = myCoin.Instance.getBalanceOfAddress(toAddress);
                // console.log("balance from:  ", balance);
                // console.log("balance to:  ", balance2);
                setToAddress("");
                setAmount(0);
              }}
            >
              Create Transaction
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
