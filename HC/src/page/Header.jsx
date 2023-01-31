import logo from '/logo.svg'

export default function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Logo Hangout With Calories" onClick={()=>{
                window.scrollTo(0,0)
            }}/>
        </header>
    )
}