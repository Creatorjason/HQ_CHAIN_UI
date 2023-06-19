
import CreateWallet from "./components/CreateWallet"
import WalletDetails from "./components/WalletDetails/WalletDetails"
import SendCoins from "./components/SendCoins"
import ReceiveAirdrop from "./components/ReceiveAirdrop"
import { Routes, Route} from 'react-router-dom';
import './App.css';






function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/wallet" element={<WalletDetails />}/>
            

          <Route path="/send-coins" element={<SendCoins />}/>


          <Route path="/receive-airdrop" element={<ReceiveAirdrop />}/>


          <Route path="/" element={<CreateWallet />}/>


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
