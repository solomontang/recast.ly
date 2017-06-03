var Autoplay = (props) => {

  return (   
    <div className="toggle col-md-8" >
     <input onChange={props.handleClick} type="checkbox" />
    
  <label>
   Autoplay
  </label>
    </div>
  );


};


window.Autoplay = Autoplay;