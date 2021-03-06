import "./Header.css"
let Header = ({ButtonClick }) => {
    let Clicked = () => {
        ButtonClick(1);
    }
    return (
        <div className="Header">
            <ul>
                <li><a href={undefined}className="brand" ><h2>Kunal Singh</h2></a></li>
                <button onClick={Clicked}className="button btn"><h4>Get Users</h4></button>
            </ul>
        </div>
        
    )
}
export default Header;