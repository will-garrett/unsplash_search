import React from 'react';

class SearchBar extends React.Component{
  state = { term: ''};

  handFormSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
  }

  render(){
    return (
      <div className="ui segment">
      <form className="ui form" onSubmit={this.handFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input type="text" 
            placeholder="Search something..."
            value={this.state.term} 
            onChange={(e)=>this.setState({term: e.target.value})}
          />
        </div>
      </form>
      </div>
    );
  }
}
export default SearchBar;