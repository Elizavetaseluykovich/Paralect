import ReactPaginate from "react-paginate";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import prev from '../../assets/prev.svg';
import Rectangle from '../../assets/Rectangle.svg';
import styles from './RepositoriesList.module.css';

function RepositoriesList({count, per_page, array, handlePageClick}) {
    let item = {
        name: 'blabla',
        description: 'qwertyuioasdfghjzxcvbwertyuin'
    }
    return (
        <>
            <h1>Repositories ({count})</h1>
            {array.map(item => <RepositoryItem values={item}/>)}
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                breakLabel={"..."}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={count/per_page}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                pageClassName={styles.pageItem}
                breakClassName={styles.pageItem}
                activeClassName={styles.activeItem}
                previousLinkClassName={styles.prev}
                previousClassName={styles.prevLi}
                nextClassName={styles.nextLi}
                nextLinkClassName={styles.next}
            /> 
    </>
    )
}

export default RepositoriesList;