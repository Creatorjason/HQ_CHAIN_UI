
import CreateWallet from "./components/CreateWallet"
import WalletDetails from "./components/WalletDetails/WalletDetails"
import SendCoins from "./components/SendCoins"
import ReceiveAirdrop from "./components/ReceiveAirdrop"
import { Routes, Route} from 'react-router-dom';
import './App.css';




// d72db9129d1b2fc62f149cb7f95d63f2793df712
//  5361856a175ad022a0378303633cc600a48cb640
function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/create-wallet" element={<CreateWallet />}/>
            

          <Route path="/send-coins" element={<SendCoins />}/>


          <Route path="/receive-airdrop" element={<ReceiveAirdrop />}/>


          <Route path="/" element={<WalletDetails />}/>


      </Routes>

 
    </div>
  // {/* //   <div className="App"> */}

  //     {/* <CreateWallet/> */}
  //     {/* <SendCoins/> */}
  // {/* //     <ReceiveAirdrop/> */}

  // </div>
  );
}

export default App;
