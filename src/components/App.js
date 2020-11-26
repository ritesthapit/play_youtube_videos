import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos : [], selectedVideo: null } //empty array
    //call back function to fetch videos from youtube api

    componentDidMount () {
        this.onTermSubmit('samsung') //set the search term manually so to display something at the beginning
    }

    onTermSubmit = async (term) => {
        //parameter term will have the value of input from searchbar
        //API request is always asynchronous operation
        //so interact with it with a promise or async await syntax
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        //our list is contained inside of response.data.items --- check by console.log(response)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0] //so as to display the first item while loading in VideoDetails
        });


    };

    //callback function to get what video is selected in VideoItem.js file which was passed through VideoList.justify
    //when user clicks the videoitems, this function is run and 
    // the video object from youtubeAPI is passed and update the state -- selectedVideo property
    // then pass it to the videodetail component
    onVideoSelect = (video) => {
        this.setState({selectedVideo : video});
    }



    render() {
        return (
            <div className="ui container">
            
                <SearchBar onTermSubmit = {this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="column eleven wide">
                            <VideoDetail video ={this.state.selectedVideo}/>
                        </div>
                        <div className="column five wide">
                            <VideoList onVideoSelect= {this.onVideoSelect} videos={this.state.videos}/>
                            {/* reference to the array we fetched when we called onTermSubmit */}
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
}

export default App;
