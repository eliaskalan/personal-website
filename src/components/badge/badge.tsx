import styles from "./badge.module.css"
const Badge=({img,children}:{img?:string, children:string} )  => {
    return (<div className={styles.containerBadge}>
        <p>{children}</p>
        </div>)
}
export default Badge