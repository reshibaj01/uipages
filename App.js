import React from 'react'
import Navbar from './components/Navbar'
import Split from './components/split'





const App = () => {
  return (
    <div className="container">
      <Navbar />
      
          <p className="para1">Homepage</p>
          <p className="para2">build and manage your hubspot website without coding</p>
          <button className="btn btn-secondary">Learn More</button>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">atlassian</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">locoste</a>
        <a className="nav-link" href="#">juniper</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" aria-disabled="true">hubspot</a>
        </div>
       
    </div>

  </div>

  
</nav>


<Split/>
     

</div>

  
    

  )
}

export default App
