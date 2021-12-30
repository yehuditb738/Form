import "./index.css";
const WelcomePage = (props) => {
    return (
        <div className="container">
            <span className="spn">Welcom {props.val.firstName + ' ' + props.val.lastName} !!</span>
        </div>
    );
}

export default WelcomePage