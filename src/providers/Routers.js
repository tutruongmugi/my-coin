import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { COLORS } from "../colors";
import { Home, CreateTransaction, CreateWallet } from "../pages";
import React, { useEffect } from "react";
import { BlockchainService } from "../blockchain/blockchain-service";
import { Transaction } from "../blockchain/blockchain";
import { PendingTransactions } from "../pages/PendingTransactions";
import { BlockChainExplorer } from "../pages/BlockChainExplorer";
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

export function Routers() {
  const myCoin = new BlockchainService();
  const tuKey = ec.keyFromPrivate(
    "7d8b8149e445d077577adc66b0a16364748d8ad5caae87f9e48d1896f4188db9"
  );
  const myKey = ec.genKeyPair();

  const myWalletAddress = myKey.getPublic("hex");
  useEffect(() => {
    // const myKey = ec.genKeyPair();
    // const publicKey = myKey.getPublic("hex");
    // const privateKey = myKey.getPrivate("hex");

    const tuAddress = tuKey.getPublic("hex");
    //privateKey: 7d8b8149e445d077577adc66b0a16364748d8ad5caae87f9e48d1896f4188db9
    //publicKey: 04932c8696f7125cb969df805f6e3aa4fca40ba52afd556c7817f6c1e9421432791b4270752282287012f57821b579c6ea1c8c90b1bf144be435fa94a55e885d5a

    const tx1 = new Transaction(myCoin.walletKeys[0].publicKey, tuAddress, 150);
    tx1.signTransaction(myCoin.walletKeys[0].keyObj);
    myCoin.addTransaction(tx1);
    myCoin.minePendingTransactions(myCoin.walletKeys[0].publicKey);

    const balance = myCoin.Instance.getBalanceOfAddress(
      myCoin.walletKeys[0].publicKey
    );
    const balance2 = myCoin.Instance.getBalanceOfAddress(tuAddress);
    console.log("balance from:  ", balance);
    console.log("balance tuAddress:  ", balance2);
    console.log("time: ", Date(tx1.timestamp));
    const tx2 = new Transaction(
      myCoin.walletKeys[0].publicKey,
      myWalletAddress,
      300
    );
    tx2.signTransaction(myCoin.walletKeys[0].keyObj);
    myCoin.addTransaction(tx2);
    myCoin.minePendingTransactions(myCoin.walletKeys[0].publicKey);
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <CreateWallet />} />

        <Route path="*">
          <div>
            {/* <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create-wallet">Get a New Wallet</Link>
              </li>
              <li>
                <Link to="/create-transaction">create a transaction</Link>
              </li>
            </ul> */}
            <AppBar elevation={0} position="static">
              <Toolbar
                variant="dense"
                style={{
                  display: "flex",
                  background: COLORS.BLACK,
                  justifyContent: "space-between",
                }}
              >
                <Typography style={{ color: COLORS.YELLOW }}>
                  MY WALLET
                </Typography>
                <div>
                  <Link to="/blockchain-explorer">
                    <Button color="primary">
                      Blockchain Explorer Transactions
                    </Button>
                  </Link>
                  <Link to="/pending-transactions">
                    <Button color="primary">Pending Transactions</Button>
                  </Link>
                  <Link to="/create-transaction">
                    <Button color="primary">Create Transaction</Button>
                  </Link>
                  <Link to="/my-wallet">
                    <Button color="primary">My Wallet</Button>
                  </Link>
                </div>
              </Toolbar>
            </AppBar>

            <hr />

            <Route
              path="/my-wallet"
              render={(props) => (
                <Home myCoin={myCoin} myWalletAddress={myWalletAddress} />
              )}
            />

            <Route
              path="/create-transaction"
              render={(props) => (
                <CreateTransaction myCoin={myCoin} myKey={myKey} />
              )}
            />
            <Route
              path="/pending-transactions"
              render={(props) => (
                <PendingTransactions
                  myCoin={myCoin}
                  myWalletAddress={myWalletAddress}
                />
              )}
            />
            <Route
              path="/blockchain-explorer"
              render={(props) => <BlockChainExplorer myCoin={myCoin} />}
            />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
