import Body from './body.js'
import Main from './main.js'
import Footer from './footer.js'

function App() {
  const title = [
    {id:1, title: 'Новости'},
    {id:2, title: 'Сообщения'},
    {id:3, title: 'Настройки'},
    {id:4, title: 'Моя страница'},
  ]
  return (
    <div className="App">
        <Main li={title}/>
        <Body />
        <Footer />
    </div>
  );
}

export default App;
