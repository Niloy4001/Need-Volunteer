const getFromLs = () =>{
    const item = localStorage.getItem('theme')
    if (item) {
        return item
    }else{
        return 'light';
    }
}

export default getFromLs ;