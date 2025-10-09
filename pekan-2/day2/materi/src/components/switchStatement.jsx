function SwitchStatement({statuses}) {
    let content;

    switch (statuses) {
        case 'loading' :
            content = <p>memulai data...</p>
            break;
        case 'success':
            content = <p style={{color: 'green'}}>data berhasil dimuat1</p>
            break;
        case 'error':
            content = <p style={{color: 'red'}}>gagal memuat data1</p>
            break;
        default:
            content = <p style={{color: 'yellow'}}>status tidak diketahui</p>
            break;
    }

    return(
         <div>
      <p>Status saat ini: <strong>{statuses}</strong></p>
      {content}
    </div>
    )
}
export default SwitchStatement;