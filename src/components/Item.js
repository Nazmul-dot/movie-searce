import React from 'react'
const Item = ({ item }) => {
    console.log(item)
    const { Poster, Title, Year, Type } = item
    console.log(Poster, Title, Year, Type)
    const dummyImgHolder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFd1ExC-w6ezJzwqVDfcCB_SYgdt_qcmRusWUb0bC10SL2mks-DZR975xKcIH5GgpDMA&usqp=CAU'
    return (
        <>
            <div className='col-md-4 mx-auto  my-3 d-flex justify-content-center'>
                <div class="card" style={{ width: '18rem' }}>
                    <img src={Poster ? Poster : dummyImgHolder} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h2 class="card-title text-center">{Title}</h2>
                        <h3 className='text-center'>{Type}:{Year}</h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Item
