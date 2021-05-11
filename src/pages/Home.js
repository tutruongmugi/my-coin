import {
  Box,
  Chip,
  Container,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";

export function Home({ myCoin, myWalletAddress }) {
  const TransactionHistory = myCoin.Instance.getAllTransactionsForWallet(
    myWalletAddress
  );
  console.log("My history: ", TransactionHistory);
  const balance = myCoin.Instance.getBalanceOfAddress(myWalletAddress);
  return (
    <div>
      <Container maxWidth="sm" style={{ padding: 32 }}>
        <Paper
          variant="outlined"
          elevation={2}
          style={{ padding: 32, width: 600 }}
        >
          <Typography variant="h6" align="left">
            <Box fontWeight="fontWeightBold" m={1}>
              My Wallet
            </Box>
          </Typography>
          <form style={{ marginTop: 32 }}>
            <div style={{ display: "flex" }}>
              <Typography component={"span"} variant={"body2"}>
                <Box fontWeight="fontWeightBold" m={1}>
                  Address:
                </Box>
              </Typography>
              <Typography
                noWrap
                style={{ wordWrap: "break-word", color: "#3498db" }}
                component={"span"}
                variant={"body2"}
              >
                <Box fontWeight="fontWeightRegular" m={1}>
                  {myWalletAddress.slice(0, 40) + "..."}
                </Box>
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography component={"span"} variant={"body2"}>
                <Box fontWeight="fontWeightBold" m={1}>
                  Balance:
                </Box>
              </Typography>
              <Typography component={"span"} variant={"body2"}>
                <Box fontWeight="fontWeightRegular" m={1}>
                  {balance}
                </Box>
              </Typography>
            </div>
          </form>
        </Paper>
        <Paper
          variant="outlined"
          elevation={2}
          style={{ padding: 32, width: 600, marginTop: 32 }}
        >
          <div className="df jcc fdc">
            <Typography variant="h6" align="left">
              <Box fontWeight="fontWeightBold" m={1}>
                Transaction History
              </Box>
            </Typography>
          </div>
          <div>
            {TransactionHistory.map((item, index) => (
              <form
                style={{
                  marginTop: 32,
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <div>
                  <div>
                    <Typography
                      noWrap
                      style={{ wordWrap: "break-word" }}
                      variant={"body2"}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "#3498db" }}
                        component="button"
                      >
                        {item.calculateHash().slice(0, 19) + "..."}
                      </Link>
                    </Typography>
                    <Typography variant={"body2"}>
                      {item.timestamp.slice(4, 24)}
                    </Typography>
                  </div>
                </div>
                <div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <Typography
                        variant={"body2"}
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        From{" "}
                      </Typography>
                      <Typography variant={"body2"}>
                        <Link
                          component="button"
                          style={{ textDecoration: "none", color: "#3498db" }}
                        >
                          {item.fromAddress === null
                            ? "Mining Reward"
                            : item.fromAddress.slice(0, 25) + "..."}
                        </Link>
                      </Typography>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Typography
                        variant={"body2"}
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        To{" "}
                      </Typography>
                      <Typography variant={"body2"}>
                        <Link
                          component="button"
                          style={{ textDecoration: "none", color: "#3498db" }}
                        >
                          {item.toAddress.slice(0, 25) + "..."}
                        </Link>
                      </Typography>
                    </div>
                  </div>
                </div>
                <Chip variant="outlined" label={parseInt(item.amount)} />
              </form>
            ))}
          </div>
        </Paper>
      </Container>
    </div>
  );
}
