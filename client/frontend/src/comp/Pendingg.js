import React from 'react'

const Pendingg = (props) => {
    return (
        <>
            {
                props.pdata.map((item) => (
                    <>
                        <div className="mainbox">
                            <div className="item">
                                <div className="items">
                                    <div className="left">
                                        <h3>{item.groceryItem}</h3>
                                    </div>
                                    <div className="right">
                                        <button className='btn1' onClick={(e) => props.cd(e, item._id)}>purchased</button>
                                        <button className='btn2' onClick={(e) => props.del(e, item._id)}>&times;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }


        </>
    )
}

export default Pendingg
