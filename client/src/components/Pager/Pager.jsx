import styles from './Pager.module.css'

export default function Pager({pageHandler, totalPages, currentPage}) {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    if (currentPage+15 <= totalPages) {
        pages = pages.slice(currentPage-1,currentPage+15)
    }
    if (currentPage+15 > totalPages) {
        pages = pages.slice(currentPage-16+totalPages-currentPage,totalPages)
    }
    return (
        <div class = {styles.container}>
            {currentPage!==1 && <button class = {styles.button} onClick = {()=>pageHandler(1)}>{'<<'}</button>}
            {currentPage!==1 && <button class = {styles.button} onClick = {()=>pageHandler(currentPage-1)}>{'<'}</button>}
            {pages.map(page=>{
                return (
                    <button className = {`${styles.button} ${currentPage === page ? styles.active : ''}`} onClick = {()=>pageHandler(page)}>{page}</button>
                )
            })}
            {currentPage !== totalPages && <button class = {styles.button} onClick = {()=>pageHandler(currentPage+1)}>{'>'}</button>}
            {currentPage!==totalPages && <button class = {styles.button} onClick = {()=>pageHandler(totalPages)}>{'>>'}</button>}
        </div>
    )
}