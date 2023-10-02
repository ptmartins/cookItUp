import Link from 'next/link';
import ContentfulImage from '@/components/ContentfulImage';
import styles from '@/styles/RecipeTile.module.css';

const RecipeTile = ({data}) => {

    const {title, image, slug} = data;

    return (
        <Link href={`/${slug}`} className={styles.recipeTile}>
            <div className={styles.recipe__thumbnail}> 
            {
                image ?  <ContentfulImage 
                            alt={title}
                            height={image.fields.file.details.image.height}
                            quality='100'
                            src={image.fields.file.url}
                            width={image.fields.file.details.image.width}
                          />                 : null
            }
            </div>
            <div className={styles.recipe__body}>
                <h2 className={styles.recipe__title}>{title}</h2>
            </div>
        </Link>
    )
}

export default RecipeTile;