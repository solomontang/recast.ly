var Search = (props) => (
  <div className="search-bar form-inline">
    <input onKeyUp={(e) => _.debounce(props.search.bind(this, e.target.value), 1000)()} className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


//
// (e) => { 
//   return _.debounce(
//     props.search.bind(this, e.target.value)
//   , 500).call(this);

// }