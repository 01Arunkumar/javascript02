import React from 'react'
class CompCard extends React.Component{
    state={
        emp_Sal:30000
    }
    btnHandler=(value)=>{
        this.setState({
           emp_Sal: 30000 + value
        })
    }
   
    render(){
         return <div className='container mt-3'>
             <div className='row'>
                 <div className='col-md-lg'>
                     <div className='card'>
                         <div className='card-header'>
                             Iam React Card Header
                         </div>
                         <div className='card-body'>
                         <h2>Employee salary: {this.state.emp_Sal}</h2>
                         </div>
                         <div className='card-footer'>
                           <button type='button' className= 'btn btn-success mr-2' onClick={this.btnHandler.bind(this,30000)}>Hike:30K</button>
                           <button type='button' className='btn btn-primary mr-2' onClick={this.btnHandler.bind(this,50000)}>Hike:50K</button>
                           <button type='button' className='btn btn-info' onClick={this.btnHandler.bind(this, 80000)}>Hike: 80k</button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>

    

         
        
            
            
      
    }
}
export default CompCard;