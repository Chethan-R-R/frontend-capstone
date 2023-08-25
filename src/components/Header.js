import logo from '../icons_assets/Logo.svg'
export default function Header(){
    return(
        <header className='container'>
            <img src={logo} className='logo' alt="little lemon logo" height={60} />
        </header>
    )
}