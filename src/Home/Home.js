import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Navigation from '../Navigation/Navigation'

const Home = () => {
    return (
        <>
        {/* <Navigation></Navigation> */}
            <div className="d-flex" style={{ backgroundColor: '#F3F2EF', paddingTop: '40px', paddingBottom: '112px' }}>
                <div className='container d-flex flex-wrap'>
                    <div className='col-3 mr-5' style={{ height: '500px', borderRadius: '20px', backgroundColor: 'white', border: '1px solid lightGrey' }}>
                        <div className='text-center mt-5'>
                            <AccountCircle style={{ fontSize: '60px' }} />
                        </div>
                        <div>
                            <h4 className='text-center'>MR.X</h4>
                        </div>
                        <div style={{ marginTop: '100px' }}>
                            <div className='d-flex justify-content-between'>
                                <h6 className='font-weight-bold'>Food Given : </h6>
                                <h6 className='font-weight-bold'>0 </h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h6 className='font-weight-bold'>Food Donated  : </h6>
                                <h6 className='font-weight-bold'>0 </h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h6 className='font-weight-bold'>Reward Point  : </h6>
                                <h6 className='font-weight-bold'>0 </h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h6 className='font-weight-bold'>Leaderboard  : </h6>
                                <h6 className='font-weight-bold'>0 </h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-7'>

                        <div className='d-flex p-3' style={{ borderRadius: '20px', height: '150px', backgroundColor: 'white', border: '1px solid lightGrey' }}>
                            <CreateIcon style={{ border: '1px solid lightGrey', marginRight: '20px' }} />
                            <p>Start a post</p>
                        </div>
                        <div className='d-flex mt-2' style={{}}>
                            <p style={{ border: '1px solid lightGrey', padding: '7px 20px', borderRadius: '30px', backgroundColor: 'white', margin: '10px' }}> <PhotoIcon style={{ color: 'blue' }} /> Photo</p>
                            <p style={{ border: '1px solid lightGrey', padding: '7px 20px', borderRadius: '30px', backgroundColor: 'white', margin: '10px' }}> <LocationOnIcon style={{ color: 'darkred' }} /> Location</p>
                            <p style={{ border: '1px solid lightGrey', padding: '7px 20px', borderRadius: '30px', backgroundColor: 'white', margin: '10px' }}> <EmojiEmotionsIcon style={{ color: 'orange' }} /> Feeling</p>
                            <p style={{ border: '1px solid lightGrey', padding: '7px 20px', borderRadius: '30px', backgroundColor: 'white', margin: '10px' }}> <LocalOfferIcon /> Tag</p>
                        </div>
                    </div>
                    {/* <div className='col-7 bg-white'>
                    <p>Photo</p>
                </div> */}
                </div>
            </div>
        </>
    );
};

export default Home;