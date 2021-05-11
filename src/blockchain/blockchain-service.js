const EC = require("elliptic");
const { Blockchain } = require("./blockchain");

class BlockchainService {
  Instance = new Blockchain();
  walletKeys = [];
  // tìm hcoox khởi tạo :v
  constructor() {
    this.Instance.difficulty = 2;
    this.generateWalletKeys(); // tạo ví
    this.Instance.sendMyAddress(this.walletKeys[0].publicKey);
  }

  minePendingTransactions(miningRewardAddress) {
    this.Instance.minePendingTransactions(miningRewardAddress);
  }

  addressIsFromCurrentUser(address) {
    return address === this.walletKeys[0].publicKey;
  }

  generateWalletKeys() {
    const ec = new EC.ec("secp256k1");
    const key = ec.genKeyPair();
    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic("hex"),
      privateKey: key.getPrivate("hex"),
    });

    console.log(this.walletKeys);
  }

  getPendingTransactions() {
    return this.Instance.pendingTransactions;
  }

  addTransaction(tx) {
    this.Instance.addTransaction(tx);
  }
}

module.exports.BlockchainService = BlockchainService;
