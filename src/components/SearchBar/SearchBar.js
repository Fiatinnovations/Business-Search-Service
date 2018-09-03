import React from 'react';
import './SearchBar.css';
import BusinessList from '../BusinessList/BusinessList';
//import ReactDOM from 'react-dom';


const sortByOptions = {
  'Best Match' : 'best_match',
  'Highest Rated' : 'rating',
  'Most reviewed' : 'review_count'
};

class SearchBar extends React.Component{
  renderSortByOptions(){
    /**To iterate through the object, you'll need to start by accessing the keys of the sortByOptionsobject.
     Call the keys() method on the JavaScript Object library. Pass in sortByOptions as the argument.**/
    return Object.keys(sortByOptions).map(sortByOption=>{
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key = {sortByOptionValue}>{sortByOption}</li>
    });
  }
render(){
  return(
    <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
     {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
</div>
  );
}
}
//ReactDOM.render(<SearchBar/>, document.getElementById('app'));
export default SearchBar;
