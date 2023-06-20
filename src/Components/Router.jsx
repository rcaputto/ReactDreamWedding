import {Router, Route} from 'react-router-dom'
import FourWedding from './FourWedding'
import CardsApp from './CardsApp'

function Routes(){
    return (
        <>
        <CardsApp/>
        <Router>
            <Route path='/allInclusive' component={FourWedding}></Route>
        </Router>
        </>
    )
}

export default Routes