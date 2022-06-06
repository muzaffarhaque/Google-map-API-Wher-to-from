// import React, { Component } from 'react'
// import mapboxgl from 'mapbox-gl'

// mapboxgl.accessToken="pk.eyJ1IjoiZ21vaGFtbWFkYWxpIiwiYSI6ImNsMWc3bG81ZjAwZjYzYm81MW96bjVobWIifQ.u_7tY0ORl8mDXzk06_zb3g";
// export default class Mapp extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             lng:10,
//             lat:100,
//             zoom:15
//         }
//     }

//     componentDidMount(){
//         const map=new mapboxgl.Map({
//             container:this.mapContainer,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center:[this.state.lng,this.state.lat],
//             zoom:this.state.zoom
//         })
//     }
//   render() {
//     return (
//       <div>
//        	<div ref={el => this.mapContainer = el} style={{width:'100%',height:'500px'}} />
//       </div>
//     )
//   }
// }
import React from 'react';
// import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken="pk.eyJ1IjoiZ21vaGFtbWFkYWxpIiwiYSI6ImNsMWc3bG81ZjAwZjYzYm81MW96bjVobWIifQ.u_7tY0ORl8mDXzk06_zb3g";


class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
            lat: -3.745,
            lng: -38.523,
			zoom:10
		}
	}

	componentDidMount() {
		// Set up map 
		const map = new mapboxgl.Map({
			container: this.mapContainer,
            // style:'mapbox://styles/mapbox/satellite-v9',
			style: 'mapbox://styles/mapbox/streets-v11',
            
			// style: 'mapbox://styles/mapbox/streets-v11',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%',height:'500px'}} />
			</div>
		)
	}
}

export default Mapp;