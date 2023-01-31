import { useEffect, useState } from "react"
import { easeOut, motion } from 'framer-motion'
import { SlClose } from "react-icons/sl";
import { VscDebugRestart } from "react-icons/vsc";
import Header from './Header'
import Footer from './Footer'

export default function HcMainPage() {
    const [keyWord, setKeyWord] = useState("")
    const [loading, setLoading] = useState(false)
    const [firstTime, setFirstTime] = useState(true)
    const [instruction, setInstruction] = useState("")
    const [table, setTable] = useState([])
    const [totalCal, setTotalCal] = useState(0)
    const [isMale, setIsMale] = useState("")
    const [suggest, setSuggest] = useState("")
    const [standard, setStandard] = useState("")


    useEffect(() => {
        caloriesTotalHandler()
    }, [table])

    useEffect(() => {
        if (isMale === "true") {
            setStandard("2,500 - 3,000 calories")
            if (totalCal < 2500) {
                return setSuggest(lt)
            } else if (totalCal >= 2500 && totalCal <= 3000) {
                return setSuggest(e)
            }
            return setSuggest(gt)
        }
        else if (isMale === "false") {
            setStandard("2,000 - 2,500 calories")
            if (totalCal < 2000) {
                return setSuggest(lt)
            } else if (totalCal >= 2000 && totalCal <= 2500) {
                return setSuggest(e)
            }
            return setSuggest(gt)
        }
    }, [totalCal, isMale])

    async function addHandler(event) {
        event.preventDefault()
        if (firstTime) {
            setFirstTime(!firstTime)
        }
        if (!keyWord) {
            return setInstruction("please type the item you are looking for first")
        }

        let newKeyword = keyWord.replace(/[^\w\s]/gi, '');
        newKeyword = newKeyword.toLowerCase()
        setInstruction("")
        setLoading(true)
        const response = await getItem(newKeyword)
        const result = await response.json()
        setLoading(false)
        checkHandler(result.hits, newKeyword)
        setKeyWord("")
    }

    const appId = "3a28083e"
    const appKey = "324a5baeff728fcbfe65860f5816cdaa"
    const fields = "item_name,brand_name,nf_calories,item_id"
    function getItem() {
        return fetch(`https://api.nutritionix.com/v1_1/search/${keyWord}?appId=${appId}&appKey=${appKey}&fields=${fields}`)
    }

    function checkHandler(result, newKeyword) {
        if (result.length === 0) {
            setInstruction("the item you are looking for is not in our catalog")
            return
        }
        const toAddResult = result[0].fields
        const rgx = `${keyWord}`.toLowerCase()
        if ((toAddResult.brand_name.toLowerCase()).match(rgx)) {
            return setInstruction("do not use the brand name for the item you are looking for")
        }
        addToTableHandler(result[0].fields, newKeyword)
    }

    async function addToTableHandler(result, newKeyword) {
        const response = await getPhotos(newKeyword)
        const photos = await response.json()

        if (photos.results.length == 0) {
            return setInstruction("the item you are looking for is not in our catalog")
        }
        const photoCatch = photos.results[1].urls.small
        for (let i = 0; i < table.length; i++) {
            const element = table[i].item_id;
            if (element == result.item_id) {
                return plusHandler(table[i])
            }
        }
        const toCamelCase = newKeyword.split(" ")
        for (let j = 0; j < toCamelCase.length; j++) {
            toCamelCase[j] = toCamelCase[j].charAt(0).toUpperCase() + toCamelCase[j].slice(1);
        }
        newKeyword = toCamelCase.join(" ")
        const newResult = {
            ...result,
            item_name: newKeyword,
            img: photoCatch,
            qty: 1
        }
        setInstruction("success")
        setTable([...table, newResult])
    }
    function getPhotos(toSearch) {
        return fetch(`https://api.unsplash.com/search/photos/?client_id=Kzs6V2gAVhZLyFi1jawevdYrLw0zgm6uYDXat7VcO4U&page=1&query=${toSearch}`)
    }

    function restartHandler() {
        setLoading(true)
        setTimeout(async function () {
            setLoading(false)
            setKeyWord("")
            setIsMale("null")
            setInstruction("")
            setSuggest("")
            setFirstTime(true)
            setTable([])
        }, 1000)
    }
    function deleteHandler(itemId) {
        const filtered = table.filter(function (item) {
            return item.item_id !== itemId
        })
        setLoading(true)
        setTimeout(() => {
            setTable(filtered)
            setLoading(false)
            setInstruction("")
        }, 1000)
    }

    function minusHandler(item) {
        if (item.qty == 1) {
            item.qty = 2
        }
        const afterMinus = {
            ...item,
            qty: item.qty - 1
        }
        const toChange = [...table]
        for (let i = 0; i < table.length; i++) {
            if (item.item_id == table[i].item_id) {
                toChange[i] = afterMinus
                break
            }
        }
        setTable(toChange)
    }

    function plusHandler(item) {
        const afterplus = {
            ...item,
            qty: item.qty + 1
        }
        const toChange = [...table]
        for (let i = 0; i < table.length; i++) {
            if (item.item_id == table[i].item_id) {
                toChange[i] = afterplus
                break
            }
        }
        setTable(toChange)
    }

    function caloriesTotalHandler() {
        let newTotal = 0
        for (let i = 0; i < table.length; i++) {
            const cal = table[i].nf_calories
            const qty = table[i].qty
            newTotal = newTotal + (cal * qty)
        }
        setTotalCal(newTotal)
    }

    const animation = {
        initial: { opacity: 0, y: 5 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: easeOut }
    }

    const lt = "You're consuming less calories than what's recommended for today. " +
        "Don't just workout or do other energy-draining activities without getting enough nutrition." +
        "You could eat nutrient-dense foods that are high in calories such as nuts, seeds, avocados, olive oil, and coconut oil."
    const e = "You're consuming the recommended amount of calories for today. " +
        "Don't forget to exercise or do other activities to burn calories so they don't pile up." +
        "You can do some activities likes walking around, jogging, strength training, yoga, or pilates."
    const gt = "You're consuming more calories than what's recommended for today. " +
        "You need to reduce that amount by exercising or doing other activities to burn off the excess calories. " +
        "You can do some excercises such as running, cycling, swimming, HIIT, yoga, or pilates."

    return (
        <>
            <Header />
            <div className="hc">
                <motion.div
                    className="search"
                    {...animation}
                >
                    <form onSubmit={addHandler} className="search-box">
                        <input type="text"
                            placeholder="search..."
                            value={keyWord}
                            className="search-input"
                            onChange={event => {
                                setKeyWord(event.target.value)
                            }} />
                        <button type="submit" className="submit-button">ADD</button>
                    </form>
                    {instruction === "success" ?
                        <p className="instruction-handler success"><i>{instruction}</i></p>
                        : <p className="instruction-handler not-success"><i>{instruction}</i></p>
                    }
                    {loading && <div className="loading-handler"><div></div><div></div><div></div></div>}
                    {firstTime && (
                        <div className="first-time-container">
                            <h3 className="first-time">INSTRUCTION</h3>
                            <ol className="rules">
                                <li>Search for food or drink by typing in the search box above then pressing the add or enter button.</li>
                                <li>the food or drink you are looking for must be one by one.</li>
                                <li>the food or drink you are looking for uses its name, not the brand name.</li>
                            </ol>
                        </div>
                    )}
                </motion.div>
                {!table.length == 0 &&
                    <button
                        className="restart-button"
                        onClick={restartHandler}>
                        <VscDebugRestart />
                    </button>}
                <div className="result-container">
                    <div className="result">
                        {table.map(item => {
                            return (
                                <motion.div
                                    className="card"
                                    key={item.item_id}
                                    {...animation}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="content">
                                        <p className="item-name">{item.item_name.split("-")[0]}</p>
                                        <motion.button
                                            className="delete-button"
                                            {...animation}
                                            onClick={deleteHandler.bind(this, item.item_id)}>
                                            <SlClose />
                                        </motion.button>
                                        <img src={item.img} alt={item.item_name} />
                                    </div>
                                    <div className="qty-control-cal">
                                        <h4>{new Intl.NumberFormat('en-US').format(item.nf_calories)} cal</h4>
                                        <div className="qty-control">
                                            <button className="plus-minus" onClick={minusHandler.bind(this, item)}>-</button>
                                            <p className="quantity">{item.qty}</p>
                                            <button className="plus-minus" onClick={plusHandler.bind(this, item)}>+</button>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
                <motion.div className="total-calories" {...animation}>
                    <p className="hangout">YOU HAVE TO HANGOUT WITH:</p>
                    <p className="calories-number">{new Intl.NumberFormat('en-US').format(totalCal)} calories</p>
                </motion.div>
                <div className="gender">
                    <label htmlFor="male" className="radio">
                        <input
                            id="male"
                            type="radio"
                            checked={isMale === "true"}
                            value={"true"}
                            className="pick-gender"
                            onChange={(e) => {
                                setIsMale(e.target.value)
                            }} />
                        <div className="radio-custom"></div>
                        <div className="gender-type">
                            Male
                        </div>
                    </label>
                    <div className="gender-title">
                        What is Your Gender?
                    </div>
                    <label htmlFor="female" className="radio">
                        <input
                            id="female"
                            type="radio"
                            className="pick-gender"
                            checked={isMale === "false"}
                            value={"false"}
                            onChange={(e) => {
                                setIsMale(e.target.value)
                            }} />
                        <div className="radio-custom"></div>
                        <div className="gender-type">
                            Female
                        </div>
                    </label>
                </div>
                <div
                    className="suggestion"
                    {...animation}>
                    {suggest && (
                        <motion.div
                            className="suggest-content"
                            {...animation}
                        >
                            <div className="standard-calories">
                                <p className="standard-title">Standard :</p>
                                <p className="standard-number">{standard}</p>
                            </div>
                            <p className="suggest-word"> <i>{suggest}</i></p>
                            <p className="tagline">hangout with your calories everyday!</p>
                        </motion.div >
                    )}
                </div>
            </div>
            <Footer/>
        </>
    )
}