import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    fetch("/api/jobs.json")
    .then(response => response.json())
    .then(jobs => this.setState({ jobs }))
    .catch(function(error){
      alert(`Erro na requisição dos arquivos!
            Alertar a equipe de suporte!`)
    })
    .finally(function(){
      console.log("Sempre retorna")
    });
  };

  render(){
    return (
      <Router>
        <div className="bg-black h-full">
          <Navbar/>
          <Main jobs={this.state.jobs}/>
        </div>
      </Router>
    );
  };
};

export default App;
