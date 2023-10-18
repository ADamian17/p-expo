import { CardsType, CategoriesType } from "../../assets/data";
import { Link } from "react-router-dom";
import styles from "./MainContent.module.scss"

const MainContent = ({ cards, categories }: { cards: CardsType; categories: CategoriesType }) => {
  return (
    <section className={styles.mainContent}>
      <aside className={styles.filterSection}>
        <h3>Filter Press</h3>

        <div>
          <p>
            By Category
            <svg xmlns="http://www.w3.org/2000/svg" fill="#333" width="24" height="24">
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path>
              <path d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
            </svg>
          </p>
          <div>
            <div>
              <Link to="/">All Press</Link>
            </div>
            {
              categories && categories.map(category => (
                <div key={category.label}>
                  <Link to={category.path}>{category.label}</Link>
                </div>
              ))
            }
          </div>
        </div>
      </aside>

      <main className={styles.cards}>
        {
          cards && cards.map((card, idx) => (
            <div key={`c-${idx}`}>
              <div>
                <img src={card.image} alt="card image" />
              </div>

              <div>
                <h3>{card.headline}</h3>
                <strong>{card.category}</strong>
                <p>{card.subcopy}</p>
              </div>
            </div>
          ))
        }
      </main>
    </section>
  )
}

export default MainContent;