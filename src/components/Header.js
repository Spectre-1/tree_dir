import { Fragment } from 'react'
import '../tailwind.css';
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
      <header className={classes.header}>
            <h1> Tree! </h1>
        </header>
        {/* <div>
            <img src={icon} alt="icon" />
        </div> */}
    </Fragment>
}

export default Header