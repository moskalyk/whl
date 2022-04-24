import react, {useState} from 'react'
import TimeGraph from './graph/TimeGraph.js'
import './App.css';
import './nu/index.js'
import Stake from './stake/Stake.js'






import Whl from './whl/Whl.js'
function App() {
  const [node, setNode] = useState(0)
  const [merge, setMerge] = useState(false)
  const [drip, setDrip] = useState(false)

  const clickMerge = () => {
    console.log('merge')
    document.getElementById('clock').remove()
    setMerge(true)
  }
  return (
    // 5.16.12.14
    <>
      <p className="title">whl</p>
      {
        !merge ? 
          (
            <>
              <div style={{top: '131px'}}id="join">
              </div>
              <div style={{margin: 'auto', textAlign: 'center', zIndex: 100}}>
                <button onClick={clickMerge}>merge</button>
              </div>
            </>
          ) 
          : 
          (
            <>
              <TimeGraph setNode={setNode}/>
              {
                !drip ? <Whl setDrip={setDrip} node={node}/> : <Stake />
              }
            </>
          )
      }
    </>
  );
}




export default App;