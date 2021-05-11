import {
  Box,
  Button,
  Chip,
  Container,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

export function PendingTransactions({ myCoin, myWalletAddress }) {
  const pts = myCoin.getPendingTransactions();
  const history = useHistory();
  return (
    <Container maxWidth="sm" style={{ padding: 32 }}>
      <Paper
        variant="outlined"
        elevation={2}
        style={{ padding: 32, width: 600, marginTop: 32 }}
      >
        <div className="df jcc fdc">
          <Typography variant="h6" align="left">
            <Box fontWeight="fontWeightBold" m={1}>
              Pending Transactions
            </Box>
          </Typography>
        </div>
        <div>
          {pts.map((item, index) => (
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
                        {item.fromAddress.slice(0, 25) + "..."}
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

          <Button
            style={{ marginTop: 32 }}
            color={"primary"}
            variant="contained"
            fullWidth
            // type="submit"
            onClick={() => {
              myCoin.minePendingTransactions(myWalletAddress);
              history.push("/my-wallet");
            }}
          >
            Start mining
          </Button>
        </div>
      </Paper>
    </Container>
  );
}
