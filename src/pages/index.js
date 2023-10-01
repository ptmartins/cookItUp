import { useState, useEffect } from 'react';
import { client } from '@/lib/contentful';
import Head from 'next/head';
import RecipeTile from '@/components/RecipeTile';
import styles from '@/styles/Home.module.css';


export default function Home({recipes}) {

  const[data, setData] = useState([]);

  /**
   * Shuffle recipes
   * @param {*} arr 
   */
  const shuffleRecipes = arr => {
    const shuffledArray = arr.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    setData(shuffledArray.slice(0, 2));
    localStorage.getItem('recipes') === undefined ? localStorage.setItem('recipes', data) : null;
  }

  const refreshRecipes = () => {
    localStorage.getItem('recipes') !== undefined ? localStorage.removeItem('recipes') : null;
    shuffleRecipes(recipes);
  }

  useEffect(() => shuffleRecipes(recipes), [recipes])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=""> 
        <div className={styles.actions}>
          <button className="btn btn--cta" onClick={() => refreshRecipes()}>Refresh</button>
          <button className="btn btn--cta">Show ingredients</button>
        </div>
        <div className={styles.recipes}>
          {data.map((recipe, index) => <RecipeTile key={index} data={recipe.fields} />)}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const response = await client.getEntries({content_type: 'recipe'})

  return {
    props: {
      recipes: response.items,
      revalidate: 7000
    }
  }
}
