import './App.css';
import { Route } from 'react-router-dom';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';

function App() {
	return (
		<div className='App'>

			<Route path={'/newhome'} component={NavBar} />

			<Route exact path={'/'} component={Landing} />

			<Route exact path={'/newhome'} component={Home} />

			<Route path={'/newcreatepoke'} component={NavBar} />

			<Route exact path={'/newcreatepoke'} component={CreatePokemon} />

			<Route exact path={'/newhome/:id'} component={Detail} />
		</div>
	);
}

export default App;
