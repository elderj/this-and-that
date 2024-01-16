import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>This and That by Kaylei</h1>
        <div style={{ backgroundColor: "white", color: "darkgray" }}>
          <ul>
            <li>Ala Carte Services:</li>
            <ul>
              <li>Nail Trim $15</li>
              <li>Ear Cleaning $5</li>
              <li>De-shedding brush out $15 (5 minute full body brushing)</li>
              <li>Teeth Brushing $10</li>
              <li>De-matting brush out $20 ( for every 10 minutes)</li>
              <li>Nail Painting $10</li>
              <li>Blow Dry $15 ($25 for doodles and poodles) </li>
              <li>
                Bath Only $25 ($35 for doodles and poodles, includes blow dry)
              </li>
              <li>Anal Gland Expression $15</li>
            </ul>

            <li>Package Pricing:</li>
            <ul>
              <li>The Works</li>
              <ul>
                <li>
                  Includes ear cleaning, nail trim, de-shed brush out, bath and
                  blow dry
                </li>
                <li>$50 for all dogs 50 lbs. and under X</li>
                <li>$45 for all dogs over 50 lbs</li>
              </ul>
              <li>De-shedding Special</li>
              <ul>
                <li>Includes ear cleaning, nail trim, bath, and blow dry</li>
                <li>$35 for all dogs 50 lbs. and under</li>
                <li>
                  $50 for all dogs 50 lbs. and under $55 for dogs over 50 lbs.
                </li>
              </ul>
              <li>Full Service</li>
              <ul>
                <li>
                  Includes ear cleaning, nail trim, de-shed or brush out
                  (depending on breed), anal gland expression, bath and blow dry
                </li>
                <li>$65 for all dogs 50 lbs and under o</li>
                <li>$70 for all dogs over 50 lbs</li>
              </ul>
              <li>
                Choice of Groom luxury dog shampoo or Seasonal Scents sugar
                cookie shampoo (for any baths)
              </li>
            </ul>
            <li>Specialty Shampoos:</li>
            <ul>
              <li>
                Add medicated shampoo to any bath- $10 (helps to eliminate yeast
                odor from the coat)
              </li>
              <li>
                Aloe and Oatmeal Soothing shampoo- $10 (lightly scented,
                recommended for sensitive skin)
              </li>
            </ul>

            <li>Luxury Add Ons:</li>
            <ul>
              <li>
                Add refreshing dog cologne after a bath for lingering freshness,
                choose from Hydra's Forever Love or Forever Candy, Seasonal
                Scent's sugar cookie cologne, Davis' Chanel type perfume for an
                additional $5
              </li>
            </ul>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
