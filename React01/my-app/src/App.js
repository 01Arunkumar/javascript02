import React from 'react'
import CompNav from './components/CompNav'
import CompCard from './components/CompCard'
class App extends React.Component{

   render(){
      return<div>
            <CompNav/>
            <CompCard/>
      </div> 
   }
}
export default App;