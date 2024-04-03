function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>환영합니다.</h1>
    }
    else {
        return <h1>로그인을 해주세요.</h1>
    }
}
export default Greeting;