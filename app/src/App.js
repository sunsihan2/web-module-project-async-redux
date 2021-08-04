import { connect } from 'react-redux';
import { getData } from './action';
import React,{useEffect} from 'react';
import './App.css';


function App(props) {
  const{data, isFetching, error} =props

  useEffect(() => {
    props.getData()
  },[])

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching data for ya!</h2>;
  }

  const handleClicke=() => {
    props.getData()
  }

  return (
    <div className="App">
    <h1>Get data from api</h1>
      <h2>name: {data.name}</h2>
      <h3>url: {data.url}</h3>
    </div>
  );
}

const mapStateToProps = state=> {
  return {
    data:state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}
export default connect(mapStateToProps,{getData}) (App);
