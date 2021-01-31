import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
        {/*Navigation bar*/}
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>                        
                </button>
                <a class="navbar-brand" href="#myPage">Logo</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                   <li><a href="#about">ABOUT</a></li>
                   <li><a href="#services">SERVICES</a></li>
                   <li><a href="#portfolio">PORTFOLIO</a></li>
                   <li><a href="#pricing">PRICING</a></li>
                   <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
      </nav>

      {/*navigation scroll*/}




      <div className="jumbotron text-center">
        <h1>Company</h1>
        <p>We specialize in blablabla</p>
        <form class="form-inline">
            <div class="input-group">
                <input type="email" class="form-control" size="50" placeholder="Email Address" required></input>
                <div class="input-group-btn">
                (input group btn is bootstrap class to align butoon with input text)
                     <button type="button" class="btn btn-danger">Subscribe</button>
                </div>
            </div>
        </form>
       </div>
        
       
       
       
       <div class="container-fluid">
          <div class="row">
             <div class="col-sm-8">
                <h2>About Company Page</h2>
                <h4>Lorem ipsum..</h4>
                <p>Lorem ipsum..</p>
                <button class="btn btn-default btn-lg">Get in Touch</button>
             </div>
             <div class="col-sm-4">
                <span class="glyphicon glyphicon-signal logo"></span>
             </div>
          </div>  
       </div> 
       
       
       
       <div class="container-fluid bg-grey">
           <div class="row">
               <div class="col-sm-4">
                    <span class="glyphicon glyphicon-globe logo "></span>
               </div>
               <div class="col-sm-8">
                    <h2>Our Values</h2>
                    <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>
                    <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
               </div>
           </div>
       </div>

       {/*Services tags */}

       <div class="container-fluid text-center">
           <h2>SERVICES</h2>
           <h4>What we offer</h4>
           <br></br>
           <div class="row">
                <div class="col-sm-4">
                    <span class="glyphicon glyphicon-off logo-small"></span>
                    <h4>POWER</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                    <span class="glyphicon glyphicon-heart logo-small"></span>
                    <h4>LOVE</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                    <span class="glyphicon glyphicon-lock logo-small"></span>
                    <h4>JOB DONE</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
           </div>
           <br></br>
           <div class="row">
                <div class="col-sm-4">
                    <span class="glyphicon glyphicon-leaf logo-small"></span>
                    <h4>GREEN</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                    <span class="glyphicon glyphicon-certificate logo-small"></span>
                    <h4>CERTIFIED</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                    <span class="glyphicon glyphicon-wrench logo-small"></span>
                    <h4>HARD WORK</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
           </div>
          
        </div>
    
       
      {/*portfolio thumbinal*/}
       
      <div class="container-fluid text-center bg-grey">
          <h2>Portfolio</h2>
          <br></br>
          <h4>What we have created</h4>
          <div class="row text-center">
               <div class="col-sm-4">
                   <div class="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/paris.jpg" alt="Paris"></img>
                        <p><strong>Paris</strong></p>
                        <p>Yes, we built Paris</p>
                   </div>
               </div>
               <div class="col-sm-4">
                   <div class="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/newyork.jpg" alt="New York"></img>
                        <p><strong>New York</strong></p>
                        <p>We built New York</p>
                   </div>
               </div>
               <div class="col-sm-4">
                   <div class="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/sanfran.jpg" alt="San Francisco"></img>
                        <p><strong>San Francisco</strong></p>
                        <p>Yes, San Fran is ours</p>
                   </div>
               </div>
          </div>
       </div>


      {/*crousal*/}

      <h2>What our customers say</h2>
      <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
        {/* Indicators  ee niche wala indicator bindu (dot) bana deta hai jinta bindu chahiye damm bhar add kro*/}
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
   
        </ol>

        {/* Wrapper for slides  this connects each dots by contents of each <div> tag */}
        <div class="carousel-inner" role="listbox">
          <div class="item active">
          <h4>"This company is the best. I am so happy with the result!"<br></br><span >Michael Roe, Vice President, Comment Box</span></h4>
          </div>
          <div class="item">
            <h4>"One word... WOW!!"<br></br><span >John Doe, Salesman, Rep Inc</span></h4>
          </div>
          <div class="item">
             {/* <div class="row text-center">*/}
             {/*     <div class="col-sm-4">*/}
                      <h4>"Could I... BE any more happy with this company?"<br></br><span >Chandler Bing, Actor, FriendsAlot</span></h4>
             {/*     </div>*/}
             {/*     <div class="col-sm-4">*/}
             {/*         <img src="https://www.w3schools.com/bootstrap/sanfran.jpg" alt="San Francisco"></img>*/}
             {/*     </div>*/}
             {/* </div>*/}
          </div>

        </div>

        {/* Left and right controls */}
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
       



      {/*Add Pricing Container*/}
       
       
      
      
      
      
      
      
      
      (end of render)
     </div>
  );
}

export default App;
