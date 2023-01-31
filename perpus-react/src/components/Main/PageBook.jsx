import SearchForm from "../Search/SearchForm";
import BookList from "../ViewBook/BookList";
import Navbar from "./Navbar";

const PageBook = () => {
    return (
        <div className="bg-[#2A3342] h-full">
            <Navbar />
            <SearchForm />
            <BookList />
        </div>
    );
}

export default PageBook;