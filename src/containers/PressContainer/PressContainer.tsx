import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import { CardsType, cards } from "../../assets/data";
import MainContent from "../../components/MainContent";
import Hero from "../../components/Hero";

import styles from "./Press.module.scss";

function PressContainer() {
  const { search } = useLocation()
  const [isSticky, setIsSticky] = useState(false);
  const [pressCards, setPressCards] = useState<CardsType>(cards);
  const categories = cards.reduce((acc, current) => {
    acc[current.category as string] = {
      label: current.category,
      path: `?filterBy=${current.category.replace(/\s+/g, '-')}`
    }
    return acc
  }, {} as Record<
    string,
    {
      label: string,
      path: string
    }
  >);


  useEffect(() => {
    const filterBy = new URLSearchParams(search).get("filterBy")?.replace(/-/g, ' ')

    const filterCards = cards.filter(card => card.category === filterBy)

    if (filterCards.length > 0) {
      setPressCards(filterCards)
    } else {
      setPressCards(cards)
    }
  }, [search])


  useEffect(() => {
    // Function to handle the scroll event
    function handleScroll() {
      console.log(window.scrollY);

      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.mainNav} ${isSticky && styles.isSticky}`}>
        <p>logo</p>

        <ul>
          <li>item-1</li>
          <li>item-2</li>
          <li>item-3</li>
        </ul>
      </nav>

      <section className={styles.press}>
        <Hero />

        <MainContent cards={pressCards} categories={Object.values(categories)} />
      </section>
    </>
  )
}

export default PressContainer