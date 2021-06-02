import styles from '../RepositoriesList/RepositoriesList.module.css';

function RepositoryItem({values}) {
    return (
        <div className={styles.item}>
            <a href={values.html_url} target="_blank" rel="noreferrer">{values.name}</a>
            <p>{values.description}</p>
        </div>
    )
}

export default RepositoryItem