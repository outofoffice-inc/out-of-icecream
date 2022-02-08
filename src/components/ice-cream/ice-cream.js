import './style.css';

function IceCream() {
  return (
    <article className="ice-cream">
      <figure>
        <img alt="Ice cream flavor" src="./../vanilla.png" />
      </figure>
      <section className="details">
        <h4 className="name">Ice Cream Flavor</h4>
        <div className="desc">Ice cream description</div>
      </section>
      <footer>
        <div className="price">$12.50/ea</div>
        <div className="quantity-controls">
          <div className="quantity-btn minus">
            <span>-</span>
          </div>
          <span className="quantity">1</span>
          <div className="quantity-btn plus">
            <span>+</span>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default IceCream;
