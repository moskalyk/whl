import React from 'react'
import clock1 from '../whl/clock_1.png'

import { videonft } from '@livepeer/video-nft'

const apiOpts = {
  auth: { apiKey: '06317288-891b-493e-8109-85445ed48efb' },
  // defaults to current origin if not specified
  endpoint: videonft.api.prodApiEndpoint
};
console.log()

// file is optional, will open a file picker if not provided.

function Stake(props){

	const mintNft = async () => {
		const chainId = await window.ethereum.request({ method: 'eth_chainId' })
		const ethereum = window.ethereum
		const minter = new videonft.minter.FullMinter(apiOpts, { ethereum, chainId });
		console.log('mint')
		const nftInfo = await minter.createNft({
		name: 'My NFT',
		nftMetadata: {
		description: 'My NFT description',
		traits: { 'my-custom-trait': 'my-custom-value' }
		}
		});
	  console.log(`minted NFT on contract ${nftInfo.contractAddress} with ID ${nftInfo.tokenId}`);
	  return nftInfo;
	}

	return(
		<>
			<div style={{margin: 'auto', textAlign: 'center'}}>
				<p>stake ♏</p>
				<img src={clock1} width={230}/>
				<br/>
				<br/>
				<button onClick={async () => {await mintNft()}}>upload</button>
			</div>
		</>
	)
}

export default Stake;