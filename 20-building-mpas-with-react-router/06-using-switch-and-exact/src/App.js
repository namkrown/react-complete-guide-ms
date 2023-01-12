import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  // Uses Switch for 1 match, and exact on products for exact match
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );

  // Adding switch to find only 1.  Evaluates in order and uses first match -> ProductDetail
  /*
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </main>
    </div>
  );
  */

  // Renders Product and Product Details. Matches all using startsWith logic
  /*
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
  */
}

export default App;

/*
  our-domain.com/welcome => Welcome Component
  our-domain.com/products => Products Component
  our-domain.com/product-detail/xyz => ProductDetail Component with productId = 'xyz'
*/
