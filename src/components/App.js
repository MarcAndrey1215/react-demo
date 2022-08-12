import React from "react";
import axios from "axios";
// import Welcome from "./Welcome";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
// import ArrayList from "./ArrayList";
// import Clock from "./Clock";

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        // async await
        const response = await axios.get( 'https://api.unsplash.com/search/photos', 
        {
            headers: {
                Authorization: 'Client-ID fIXm4PraijDjAfy0lzgOLH6Qy-jWE-PScn8lboDl7x8'
            },
            params: {
                query: term,
                per_page: 20
            }
        } );
        this.setState({ images: response.data.results })
        // promise syntax
        // axios.get( 'https://api.unsplash.com/search/photos', 
        // {
        //     headers: {
        //         Authorization: 'Client-ID fIXm4PraijDjAfy0lzgOLH6Qy-jWE-PScn8lboDl7x8'
        //     },
        //     params: {
        //         query: term
        //     }
        // } ).then( (response) => {
        //     console.log(response.data.results);
        // } );
    }

    render() {
        return (
        <div>
             <Navbar />
             <SearchBar onSubmit={this.onSearchSubmit} label="Picture Search" />
             <ImageList images={this.state.images} />
             {/* <ArrayList />
             <Clock /> */}

        {/* <div className="container">
            <h1>Hello World!</h1>
            <Welcome name="Mickey" />
        </div> */}
        </div>
        );
    }
}
export default App;