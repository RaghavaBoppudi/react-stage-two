import profilePic from './assets/child-pic.jpg'
function Card(){
  return(
    <div className="card">
      <img className="cardImage" alt="profile picture" src={profilePic} />
      <h2 className='card-title' >Raghav</h2>
      <p className='card-text' >Freelance Web Developer | Photographer</p>
    </div>
  );
}

export default Card