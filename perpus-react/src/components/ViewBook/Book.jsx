import { Link } from 'react-router-dom'


const Book = (book) => {
    return (
        <div className="flex px-12 py-12 m-3 bg-white shadow-lg rounded-xl hover:-translate-y-3 transition hover:shadow-lg hover:shadow-gray-500 flex-col">
            <div className='book-item-img max-w-[180px] mx-auto flex justify-center'>
                <img src={book.cover_img} alt="cover" />
            </div>

            <div className='book-item-info text-center text-gray-700 my-[20px]'>
                <Link to={`/book/${book.id}`} target="_blank" {...book}>
                    <div className='font-bold mt-3 text-[18px]'>
                        <span>{book.title}</span>
                    </div>

                    <div className='mt-3'>
                        <h1 className='font-bold'>Author:
                            <span className='font-normal text-gray-500'> {book.author.join(", ")}</span></h1>
                    </div>

                    <div className='mt-3'>
                        <h1 className='font-bold'>Total Edition:
                            <span className='font-normal text-gray-500'> {book.edition_count}</span></h1>
                    </div>

                    <div className='mt-3'>
                        <h1 className='font-bold'>First Publish Year:
                            <span className='font-normal text-gray-500'> {book.year}</span></h1>
                    </div>
                </Link>
            </div>
        </div >
    );
}

export default Book;