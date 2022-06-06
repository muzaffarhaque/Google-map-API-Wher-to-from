import './App.css';
import React,{useState} from 'react'
import logo from './images/Graviti Logo 1.svg'
import origen from './images/placeholder 2.svg'
import {useJsApiLoader,GoogleMap} from '@react-google-maps/api'
function App() {
  const [origin1,setOrigin1]=useState();
  const [distination1,setDistination1]=useState();
  const [checked,setChecked]=useState(false)
        const { isLoaded } =useJsApiLoader({
            googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            libraries:['places'],
        })
        if(!isLoaded){
            return <h2>Loading...</h2>
        }

        const containerStyle = {
            width: '100%',
            height: '100%',
            // border:'2px solid red'
          };
          
          const center = {
            lat: -3.745,
            lng: -38.523
          };

        
          let change={
              display:"block"
            }
          let start=()=>{
            console.log("click")
            setChecked(true)
          }
          if(!checked){
            change.display="none"
           
           
          }
       

          return (
        
        <div className="App">

            <header className="mah--header">
                <img className="mah--logo" src={logo} alt="logo"/>
            </header>

            <section className="mah--section">

                <div className="mah--Title">
                    <p>Let's calculate
                        <span className="mah--title-bolder"> distance </span>
                        from Google maps</p>
                </div>

                <div className="mah--grid-container">
                    <div className="mah--colum">
                        <div className="mah--input-details">
                            <div className="mah--child-colum">
                                <div className="mah--input-frame">
                                    <span className='mah--origen'>Origen</span>
                                      <div className="mah--frame-inputText">
                                        <img className="mah--image-logo" src={origen} alt="origin logo" />
                                        {/* <Autocomplete> */}
                                        <input type="text" onChange={(e)=>{setOrigin1(e.target.value);setChecked(false)}} placeholder='' className="mah--input-box"/>
                                        {/* </Autocomplete> */}
                                      </div>  
                                </div>
                            </div>

                            <div className="mah--child-colum">
                              <button className="mah--Calculate" onClick={start}>Calculate</button>
                            </div>

                            <div className="mah--child-colum">
                            <div className="mah--input-frame">
                                    <span className='mah--origen'>Destination</span>
                                      <div className="mah--frame-inputText">
                                        <img className="mah--image-logo" src={origen} alt="origin logo" />
                                        {/* <Autocomplete> */}
                                        <input type="text" onChange={(e)=>{setDistination1(e.target.value);setChecked(false)}} placeholder='' className="mah--input-box"/>
                                        {/* </Autocomplete> */}
                                      </div>  
                                </div>
                            </div>
                            <div className="mah--child-colum calculate-distande"  >
                              <span className='mah--super-cahild first'>Distance</span>
                              <span className='mah--super-cahild second'>1,427 kms</span>
                            </div>
                            <div className="mah--child-colum calculate-distande simple-text" style={change} >
                            The distance between <span style={{fontWeight:"bold"}}>{'\u00A0'}{origin1}{'\u00A0'}</span> and <span style={{fontWeight:"bold"}}ad> {'\u00A0'}{distination1}{'\u00A0'} </span> is <span> {'\u00A0'}1,427 kms{'\u00A0'}</span>.
                            </div>
                        </div>
                    </div>
                    <div className="mah--colum" style={{height:"500px"}}>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        
      </GoogleMap>
                    </div>
                </div>

            </section>

        </div>
        
    );
}

export default App;
