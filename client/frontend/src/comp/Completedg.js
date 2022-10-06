import React from 'react'

const Completedg = (props) => {
    return (
        <>
            {
                props.cdata.map((item) => (
                    <>
                        <div className="mainbox">
                            <div className="item">
                                <div className="items">
                                    <div className="left">
                                        <h3 className='cg'>{item.groceryItem}</h3>
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

export default Completedg
