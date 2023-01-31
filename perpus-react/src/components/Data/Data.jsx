import { useEffect, useState, createContext, useCallback } from "react";    

export const DataContext = createContext();
const Data = ({children}) => {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("Hell Boy")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(true)
    const baseURL = "http://openlibrary.org/search.json?title="

    const bookDatas = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${baseURL}${search}`)
            const datas = await response.json()
            const {docs} = datas

            if(docs){
                const newBooks = docs.slice(0, 20)
                .map((book) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = book;
    
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        year: first_publish_year,
                        title: title
                    }
                })
                
                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResult("Your Search Result")
                }else {
                    setResult("No Search Result Found!")
                }
            } else {
                setBooks([])
                setResult("No Search Result Found!")
            }
            setLoading(false)
        } catch(error) {
            console.log(error)
            setLoading(false)
        }
    }, [search])

    useEffect(() => {
        bookDatas()
    }, [search, bookDatas])

    return(
        <DataContext.Provider value={{books, search, setSearch, loading, result, setResult}}>
            {children}
        </DataContext.Provider>
    )
}

export default Data;