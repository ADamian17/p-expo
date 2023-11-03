import "./PricingContainer.scss";

const PricingContainer = () => {
  return (
    <section className="container">
      <section className="pricing-cards">
        <div className="pricing-card">
          <div className="pricing-card-header">
            <h2>Card one</h2>

            <ul>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>


          <div className="pricing-card-content">
            <button className="cta">start for free</button>

            <h2>Content Header One</h2>
            <li>item</li>
            <li>item</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In praesentium, eos, eum placeat nulla adipisci fugiat consequatur quidem eligendi saepe eveniet asperiores similique eaque accusantium cum voluptates illo velit exercitationem.</li>
            <li>item</li>
            <li>item</li>
          </div>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-header">
            <h2>Card two</h2>

            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>

          <div className="pricing-card-content">
            <button className="cta">start for free</button>

            <h2>Content Header two</h2>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci unde ipsam, a reprehenderit delectus officia, expedita pariatur aut assumenda quibusdam. Quae inventore quas delectus at laudantium ducimus nobis ratione?</li>
          </div>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-header">
            <h2>Card three</h2>

            <ul>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>

          <div className="pricing-card-content">
            <button className="cta">start for free</button>

            <h2>Content Header three</h2>
            <li>item</li>
            <li>item</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam enim, autem dolorem pariatur facilis animi, deserunt cupiditate eum assumenda beatae consequuntur alias, ipsa iusto deleniti esse ducimus explicabo minus.</li>
            <li>item</li>
            <li>item</li>
          </div>
        </div>
      </section>
    </section>
  )
};

export default PricingContainer;
