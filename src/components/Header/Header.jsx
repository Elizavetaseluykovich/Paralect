import React, {useState} from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import {Link, useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/actions';

function Header() {
    let history = useHistory();
    const [search, setSearch] = useState('');

    function submit(e) {
        e.preventDefault();
        if (search.trim().length) {
            history.push(`/user/${search}`);
        } 
        setSearch('');
    }

    return (
        <div className={styles.header}>
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <form className={styles.form} onSubmit={e => submit(e)}>
                <button></button>
                <input type="text" placeholder="Enter GitHub username" onChange={e => setSearch(e.target.value)} value={search}/>
            </form>
        </div>
    )
}

export default Header;