import React from 'react'
class Card extends React.Component{
    render(){
        return(
           <div className='container mt-3'>
               <div className='row'>
                   <div className='col-3'>
                     <div className='card'>
                       <img className='card-img-top' src="https://wallpaperaccess.com/full/1386233.jpg" alt="akshaykumar img"/>
                       <div className='card-body'>
                            <h1 className='card-title'>Akshay</h1>
                            <p className='card-text'>He is an Indian born naturalized Canadian Bollywood actor</p>
                            <a href="https://en.wikipedia.org/wiki/Akshay_Kumar" className="btn btn-info">cilck</a>
                       </div>
                      </div>
                   </div>
                   <div className='col-3'>
                     <div className='card'>
                       <img className='card-img-top' src="https://www.pinkvilla.com/imageresize/thalapathy_vijay_court_issue.jpg?width=752&format=webp&t=pvorg" alt="vijay talapati img"/>
                       <div className='card-body'>
                            <h1 className='card-title'>Vijay</h1>
                            <p className='card-text'>He is a south Indian actor </p>
                            <a href="https://en.wikipedia.org/wiki/Vijay_(actor)" className="btn btn-info">cilck</a>
                       </div>
                      </div>
                   </div>
                   <div className='col-3'>
                     <div className='card'>
                       <img className='card-img-top' src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/nayanthara-main.jpg" alt="nayanatara image"/>
                       <div className='card-body'>
                            <h1 className='card-title'>Nayanatara</h1>
                            <p className='card-text'>She is south Indian actress</p>
                            <a href="https://en.wikipedia.org/wiki/Nayanthara" className="btn btn-info">cilck</a>
                       </div>
                      </div>
                   </div>
                   <div className='col-3'>
                     <div className='card'>
                       <img className='card-img-top' src="https://www.pinkvilla.com/imageresize/puneeth-rajkumar-main.jpg?width=752&format=webp&t=pvorg" alt="puneet Rajkumar"/>
                       <div className='card-body'>
                            <h1 className='card-title'>Puneet</h1>
                            <p className='card-text'>He is an Indian KGF actor</p>
                            <a href="https://en.wikipedia.org/wiki/Puneeth_Rajkumar" className="btn btn-info">cilck</a>
                       </div>
                      </div>
                   </div>
               </div>
            <div className='row mt-3'>
               <div className='col-4'>
                   <div className="card">
                       <img className='card-img-top' src="https://static.toiimg.com/photo/msid-89474556/89474556.jpg?30756" alt="darshan"/>
                      <div className='card-body'>
                        <h1 className='card-title'>darshan</h1>
                        <p className='card-text'>he is an Indian KGF actor</p>
                        <a href="https://en.wikipedia.org/wiki/Darshan_(actor)" className='btn btn-info'>click</a>
                      </div>     
                   </div>
               </div>

               
               <div className='col-4'>
                   <div className="card">
                       <img className='card-img-top' src="https://static.toiimg.com/photo/msid-89474556/89474556.jpg?30756" alt="darshan"/>
                    <div className='card-body'>
                        <h1 className='card-title'>darshan</h1>
                        <p className='card-text'>he is an Indian KGF actor</p>
                        <a href="https://en.wikipedia.org/wiki/Darshan_(actor)" className='btn btn-info'>click</a>    
                   </div>
               </div>

               </div>
               <div className='col-4'>
                   <div className="card">
                       <img className='card-img-top' src="https://static.toiimg.com/photo/msid-89474556/89474556.jpg?30756" alt="darshan"/>
                    <div className='card-body'>
                        <h1 className='card-title'>darshan</h1>
                        <p className='card-text'>he is an Indian KGF actor</p>
                        <a href="https://en.wikipedia.org/wiki/Darshan_(actor)" className='btn btn-info'>click</a>
                    </div>    
                   </div>
               </div>
               </div>
           </div>
        )
    }
}
export default Card