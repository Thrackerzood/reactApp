import Body from './body.js'
import Main from './main.js'
import Footer from './footer.js'
import title from './titleInfo.js'

function App() {
  return (
    <div className="App">
        <Main li={title}/>
        <Body />
        <Footer />
    </div>
  );
}
export default App;
