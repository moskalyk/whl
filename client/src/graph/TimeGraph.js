import react, {useState, useEffect} from 'react'
import { ForceGraph3D } from 'react-force-graph';

function Timegraph(props) {

	const [data, setData] = useState({nodes: [], links: []})
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {

		if(!loaded) {
			const nodes = []
			const links = []

			// preload
			var node = {
			  id: 1,
		      name: 1,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 200,
		      totalInflowRate: 0,
		      val: 240
		    };
		    nodes.push(node);

			node = {
			  id: 2,
		      name: 2,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 100,
		      totalInflowRate: 0,
		      val: 10

		    };
		    nodes.push(node);

			node = {
			  id: 3,
		      name: 3,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 100,
		      totalInflowRate: 0,
		      val: 10

		    };
		    nodes.push(node);

			node = {
			  id: 4,
		      name: 4,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 100,
		      totalInflowRate: 0,
		      val: 10

		    };
		    nodes.push(node);

			var link = {
				source: 2,
				target: 1,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			link = {
				source: 1,
				target: 3,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			link = {
				source: 4,
				target: 1,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			link = {
				source: 3,
				target: 2,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			console.log({nodes: nodes, links: links})
		    setData({nodes: nodes, links: links})
			setLoaded(true)
		}

	})

	const handleNodeClick = (id) => {
		console.log('clicked')
		console.log(id)
		props.setNode(id.id)
	}

	const clickRefresh = () => {
		console.log('refresh')
		const nodes = []
			const links = []

			// preload
			var node = {
			  id: 1,
		      name: 1,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 200,
		      totalInflowRate: 0,
		      val: 240
		    };
		    nodes.push(node);

			node = {
			  id: 2,
		      name: 2,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 100,
		      totalInflowRate: 0,
		      val: 10

		    };
		    nodes.push(node);

			node = {
			  id: 3,
		      name: 3,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 100,
		      totalInflowRate: 0,
		      val: 10

		    };
		    nodes.push(node);

			node = {
			  id: 4,
		      name: 4,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 100,
		      totalInflowRate: 0,
		      val: 10

		    };
		    nodes.push(node);

		   	node = {
			  id: 5,
		      name: 5,
		      // color: topTenOutflowAcountIds.includes(account.id)
		      //   ? "rgb(255, 255, 255)"
		      //   : "rgb(86, 184, 73)",
		      totalOutflowRate: 100,
		      totalInflowRate: 0,
		      val: 10

		    };
		    nodes.push(node);

			var link = {
				source: 2,
				target: 1,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			link = {
				source: 1,
				target: 3,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			link = {
				source: 4,
				target: 1,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			link = {
				source: 3,
				target: 2,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			link = {
				source: 5,
				target: 1,
				curvature: 0,
				rotation: 0,
			};

			links.push(link)

			console.log({nodes: nodes, links: links})
		    setData({nodes: nodes, links: links})
	}

	return(
		<>
			<button onClick={clickRefresh}>♽</button>
			<ForceGraph3D
				linkCurvature="curvature"
        		linkCurveRotation="rotation"
        		linkDirectionalParticles={2}
        		graphData={data}
        		onNodeClick={handleNodeClick}
        		nodeVal="nodeRelSize"
        		nodeRelSize={3}
        		width={window.innerWidth}
        		height={400}
        	/>
		</>
	)
}

export default Timegraph;