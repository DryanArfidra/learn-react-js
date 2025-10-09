function ConditionalIfElse({isLoggedIn}) {
    let message;

    if (!isLoggedIn) {
        message = <h3>- silahkan login kembali</h3>;
    }else {
        message = <h3>- selamat datang kembali</h3>
    }
     return (
        <div>
            {message}
        </div>
     )
}
export default ConditionalIfElse;