import React from 'react';

class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }
  state = {spans: null};
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = ()=>{
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 5);
    this.setState({spans});
  }

  render(){
    return ( <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
      <a download href={this.props.source}><img ref={this.imageRef} src={this.props.source}
      alt={this.props.decription}/></a>
      </div>)
  }
}
export default ImageCard;