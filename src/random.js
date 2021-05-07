import React from "react";

/* клянусь тут я рили застрял часа на 2*/
class Random extends React.Component{
   constructor(props){
      super(props)
      this.state = {error: null,isLoaded: false,images: []}
   }
   componentDidMount() {
      fetch('https://api.thecatapi.com/v1/images/search')
          .then(response => response.json())
          .then(data => {
             this.setState({images: data})
             this.setState({isLoaded: true});
          })
          .then(error =>{
            this.setState({false: true});
            this.setState({error});
          })
  }
   render(){
         return (
      <main>
         <section className="sectionRandomCat">
             {this.state.images.map((image) => <img key="{item}" alt={image.id}  src={image.url}></img>)} 
         </section>
      </main>
   )
   }
}


export default Random