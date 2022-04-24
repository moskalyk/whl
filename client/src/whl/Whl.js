import React, {useState, useEffect} from 'react'
import clock1 from './clock_1.png'
import clock2 from './clock_2.png'
// import SuperfluidSDK from '@superfluid-finance/js-sdk';
import { Web3Provider } from '@ethersproject/providers';

// const TREE = {
//   value: 100,
//   label: 'SUM = 100',
//   children: [{
//     value: 50,
//     children: [{
//       value: 10
//     },
//     {
//       value: 20
//     }]
//   }, {
//     value: 30
//   }, {
//     value: 20
//   }]
// };

function Whl(props){

  // const [streaming, setStreaming] = useState(false)
  // const [isLoaded, setIsLoaded] = useState(false)

  // const [address, setAddress] = useState('')
  // const [userObj, setUserObj] = useState({})
  // const [sfObj, setSfObj] = useState({})

  // useEffect(async () => {
  //   if(!isLoaded){
  //     const walletAddress = await window.ethereum.request({
  //       method: 'eth_requestAccounts',
  //       params: [
  //         {
  //           eth_accounts: {}
  //         }
  //       ]
  //     });
  //     const sf = new SuperfluidSDK.Framework({
  //       ethers: new Web3Provider(window.ethereum),
  //       // tokens: ['fDAI']
  //     });


  //     await sf.initialize();
  //     const user = sf.user({
  //       address: walletAddress[0],
  //       token: '0x96B82B65ACF7072eFEb00502F45757F254c2a0D4'
  //     });

  //     setAddress(walletAddress[0])
  //     setSfObj(sf)
  //     setUserObj(user)
  //     setIsLoaded(true)

  //     setInterval(() => {
  //       console.log('checking')
  //       // console.log((await sf.cfa.getAccountFlowInfo({superToken: '0x96B82B65ACF7072eFEb00502F45757F254c2a0D4', account: walletAddress[0]})))
  //     }, 2000)
  //   }
  // }, [userObj, sfObj, address])

	// useEffect(() => {

	// })

  const drip = async () => {
		console.log('dripping')
    props.setDrip(true)
    // const tx = await userObj.flow({
    //   recipient: '0x74Cf94e2421fc078d79DAE11893b99668449f2C3',
    //   // flowRate: 385802469135802
    //   flowRate: '450000000000'
    // });

    // console.log(tx)
    // props.setStreaming(true)
  }

  // const cancelStream = async () => {
  //   // setTriggerState('ready')

  //   const deleteFlowOperation = await userObj.sf.cfa.deleteFlow({
  //     sender: address,
  //     receiver: '0x74Cf94e2421fc078d79DAE11893b99668449f2C3',
  //     superToken: '0x96B82B65ACF7072eFEb00502F45757F254c2a0D4'
  //   });

  //   console.log(deleteFlowOperation);
  //   props.setStreaming(true)
  // }

	return(
		<>
      <div style={{margin: 'auto', textAlign: 'center'}}>
			  <p>dials</p>
  			{
  				props.node == 1 || props.node == 5 ? <img src={clock1} width={230}/> : <img src={clock2} width={230}/>
  			}
        <br/>
        <br/>
			  <button onClick={async () => await drip()}>drip</button>
      </div>
		</>
	)
}

export default Whl;