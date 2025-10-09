function TernaryConditional({isLoggedIn, unreadMessages}) {
    return (
        <div>
            <div>
                {isLoggedIn ? (
                    <p style={{ color: 'green' }}>- Anda sudah login.</p>
                ) : (
                    <p style={{ color: 'red' }}>- Anda belum login.</p>
                )}
            </div>
            <div>
                {unreadMessages > 0 && (
                    <p>
                        - Anda memiliki <strong>{unreadMessages}</strong> pesan baru.  
                    </p>
                )}
                {unreadMessages === 0 && (
                    <p>- Tidak ada pesan baru.</p>
                )}
            </div>
        </div>
    )
}
export default TernaryConditional;