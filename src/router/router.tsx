import { Component, Suspense  } from 'react';
import { Route, Switch } from 'react-router-dom';
import { router } from './index'
import Login from '../view/login/login'

class Router extends Component {
    render() {
        return (
            <> 
                <Suspense fallback>
                    <Switch>
                        <Route path="/" component={Login} exact />
                        {router.map(v=> 
                            (<Route key={v.key} path={v.path} component={v.component} exact={v.exact ?? false} />)
                        )}
                    </Switch>
                </Suspense>
            </>
        )
    }
}

export default Router