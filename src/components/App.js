import React from 'react';

import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term)=>{
        console.log("term", term);
        console.log("Preflight", process.env.REACT_APP_UNSPLASH_KEY);
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results});
    }
    render(){

        return (
            <div style={{ marginTop: '10px' }} className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;