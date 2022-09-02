import React from 'react'
import { Carousel} from 'react-bootstrap'
import Rev1 from '../img/Rev1.jpg'
import Rev2 from '../img/Rev2.jpg'
import Rev3 from '../img/Rev3.jpg'
import Rev4 from '../img/steve.jpg'

const Reviews = () => {
    return(
        <>
            <h1 className='text-center text-light navcolor mb-0 review-title pt-4'>Reviews and testimonials</h1>
            <Carousel className='w-100 navcolor'>
                <Carousel.Item className='review-container'>
                    <Carousel.Caption className='review-body d-block m-auto'>
                        <div className='review-body-text'>
                            <div className='join-text'>
                                <h1 className='left-text font-passion'>"</h1>
                            </div>
                            <div className='join-text'>
                                <h3 className='text-justify right-text'>I like that the room is spacious and their service was good. They also provide free shuttle going back and forth to SM Clark. Breakfast should also be improved, only few choices and it doesnt exceed my expectation. Maybe the quality of the food is not so good.</h3>
                            </div>
                        </div>
                        <div className='triangle-down d-block m-auto'></div>
                        <img
                            className="d-block m-auto rounded-circle review-img"
                            src={ Rev1 }
                            alt="First Review"
                        />
                        <p>Rivera C.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='review-container navcolor'>
                    <Carousel.Caption className='review-body d-block m-auto'>
                        <div className='review-body-text'>
                            <div className='join-text'>
                                <h1 className='left-text font-passion'>"</h1>
                            </div>
                            <div className='join-text'>
                                <h3 className='text-justify right-text'>The staff are accommodating and welcoming. Rooms are spacious and the hotel is very clean as a whole. We love the decors on the lobby. The restaurant offers a variety of breakfast menu. There's an acoustic band playing at night too. </h3>
                            </div>
                        </div>
                        
                        <div className='triangle-down d-block m-auto'>
                        </div>
                        
                        <img
                            className="d-block m-auto rounded-circle review-img"
                            src={ Rev2 }
                            alt="Second Review"
                        />
                        <p>Joy T.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='review-container navcolor'>
                    <Carousel.Caption className='review-body d-block m-auto'>
                        <div className='review-body-text'>
                            <div className='join-text'>
                                <h1 className='left-text font-passion'>"</h1>
                            </div>
                            <div className='join-text'>
                                <h3 className='text-justify right-text'>Room gave me the same feeling, spacious. did not feel hemmed in at all. Food choices is on the savory and heavy side. parking was not a problem. And the staff were very nice, providing quick service. i would come back here.</h3>
                            </div>
                        </div>
                        <div className='triangle-down d-block m-auto'>

                        </div>
                        <img
                            className="d-block m-auto rounded-circle review-img"
                            src={ Rev3 }
                            alt="Second Review"
                        />
                        <p>Pogs D.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='review-container navcolor'>
                    <Carousel.Caption className='review-body d-block m-auto'>
                        <div className='review-body-text'>
                            <div className='join-text'>
                                <h1 className='left-text font-passion'>"</h1>
                            </div>
                            <div className='join-text'>
                                <h3 className='text-justify right-text'>We had a blast and super duper happy that we decided to spend our NY Eve at Xenia. The rate is easy on the pocket with package inclusions that are highly commendable. We are looking forward to the next NY Eve party as we plan to spend it there again!</h3>
                            </div>
                        </div>
                        <div className='triangle-down d-block m-auto'>

                        </div>
                        <img
                            className="d-block m-auto rounded-circle review-img"
                            src={ Rev4 }
                            alt="Second Review"
                        />
                        <p>Steve J.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>       
    )
}
export default Reviews