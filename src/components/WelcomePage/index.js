const WelcomePage = (props) => {
    return (
        <h1>Welcom {props.name.firstName + ' ' + props.name.firstName}</h1>
    );
}

export default WelcomePage