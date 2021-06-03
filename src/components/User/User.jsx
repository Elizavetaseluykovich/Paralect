import styles from './User.module.css'
import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getRepositories } from '../../store/actions';
import RepositoriesList from '../RepositoriesList/RepositoriesList';


function User() {
    let {username} = useParams();
    const dispatch = useDispatch();
    let {login, error, avatar_url, name, userUrl, following, followers, repArr, currentPage, public_repos} = useSelector(state => state);

    let per_page = Math.floor(((window.innerHeight)/180));

    let perPage =  public_repos > per_page*currentPage ? per_page : public_repos - per_page*currentPage;

    useEffect(() => {
        dispatch(getUser(username));
        dispatch(getRepositories(username, currentPage, per_page));
    }, [])

    useEffect(() => {
        dispatch(getUser(username));
        dispatch(getRepositories(username, currentPage, 4));
    }, [username])

    useEffect(() => {
        dispatch(getRepositories(username, currentPage, 4));
    }, [currentPage])

    function numConvert(num) {
        if(num > 999 && num < 1000000){
            return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        }else if(num > 1000000){
            return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        }else if(num < 900){
            return num; // if value < 1000, nothing to do
        }
    }
    return (
        <>
            {error ? 
                <div className={styles.notFound}> 
                    <div className={styles.notFoundContent}>
                        <p>User not found</p>
                    </div>
                </div> 
            :   <div className={styles.found}>
                    <div className={styles.userInfo}>
                        <img src={avatar_url} alt="user avatar"/>
                        <p className={styles.name}>{name ? name : login}</p>
                        <a href={userUrl} target="_blank" rel="noreferrer">{login}</a>
                        <div className={styles.followInfo}>
                            <div className={styles.followers}>
                                <p className={styles.text}>{numConvert(followers)} followers</p>
                            </div>
                            <div className={styles.following}>
                                <p className={styles.text}>{numConvert(following)} following</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.repositories}>
                        {repArr.length > 0 ? 
                            <>
                                <RepositoriesList count={public_repos} per_page={perPage} array={repArr} handlePageClick={({selected}) => {dispatch({type: 'SET_PAGE', payload: selected + 1})}}/> 
                            </>
                        : 
                            <div className={styles.repEmpty}>
                                <div className={styles.content}>
                                    <p>Repository list is empty</p>
                                </div>
                            </div>
                        }
                        
                    </div>
                </div>}
        </>        
    )
}

export default User;