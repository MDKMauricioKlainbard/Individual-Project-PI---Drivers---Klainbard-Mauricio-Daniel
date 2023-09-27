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
        pages = pages.slice(totalPages-16,totalPages)
    }
    return (
        <div class = {styles.container}>
            {totalPages && currentPage!==1 && <button class = {styles.button} onClick = {()=>pageHandler(1)}>{'<<'}</button>}
            {totalPages && currentPage!==1 && <button class = {styles.button} onClick = {()=>pageHandler(currentPage-1)}>{'<'}</button>}
            {pages.map(page=>{
                return (
                    <button className = {`${styles.button} ${currentPage === page ? styles.active : ''}`} onClick = {()=>pageHandler(page)}>{page}</button>
                )
            })}
            {totalPages && currentPage !== totalPages && <button class = {styles.button} onClick = {()=>pageHandler(currentPage+1)}>{'>'}</button>}
            {totalPages && currentPage!==totalPages && <button class = {styles.button} onClick = {()=>pageHandler(totalPages)}>{'>>'}</button>}
        </div>
    )
}