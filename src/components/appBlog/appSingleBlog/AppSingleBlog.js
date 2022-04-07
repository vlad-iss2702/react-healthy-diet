import AppBlogSidebar from '../appBlogSidebar/AppBlogSidebar';

import './appSingleBlog.scss';

import blogOne from '../../../resources/img/main/blog/blog-1.png';
import blogTwo from '../../../resources/img/main/blog/blog-2.png';
import autor from '../../../resources/img/author.png';
import commentOne from '../../../resources/img/comment_1.png';
import commentTwo from '../../../resources/img/comment_2.png';
import commentThre from '../../../resources/img/comment_3.png';

const AppSingleBlog = () => {
    return (
        <div className="container">
            <div className="blog-structure">
                <div className="blog-list">
                    <div className="single-blog-info">
                        <img src={blogOne} alt="" />
                        <h3>Second divided from form fish beast made every of seas all gathered us saying he our</h3>
                        <ul className="single-blog-autor">
                            <li><a href><i className="icon-user"></i> Vladimir</a></li>
                            <li><a href><i className="icon-comments"></i> 03 Comments</a></li>
                        </ul>
                        <div className="single-blog-text">
                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
                            <section>
                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>
                            </section>
                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
                        </div>
                            
                        <div className="single-blog-social">
                            <p> Lily and 4 people like this</p>
                            <ul>
                                <li><a href><i className="icon-instagram"></i></a></li>
                                <li><a href><i className="icon-twitter"></i></a></li>
                                <li><a href><i className="icon-google-plus"></i></a></li>
                                <li><a href><i className="icon-facebook"></i></a></li>
                            </ul>
                        </div>
                            
                        <div className="single-blog-other">
                            <div className="single-blog-other__prev">
                                <div className="blog-other__prev-img">
                                    <a href><img src={blogTwo} alt="" /></a>
                                </div>
                                <div className="blog-other__prev-info">
                                    <p>Prev Post</p>
                                    <h4><a href>Space The Final Frontier</a></h4>
                                </div>
                            </div>
                            <div className="single-blog-other__next">
                                <div className="blog-other__next-info">
                                    <p>Next Post</p>
                                    <h4><a href>Telescopes 101</a></h4>
                                </div>
                                <div className="blog-other__next-img">
                                    <a href><img src={blogTwo} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="single-blog__autor">
                            <div className="single-blog__autor-img">
                                <img src={autor} alt="" />
                            </div>
                            <div className="single-blog__autor-info">
                                <h4><a href>Harvard milan</a></h4>
                                <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
                            </div>
                        </div>
                        <div className="single-blog__comments">
                            <div className="single-blog__comments-count">
                                <p>05 Comments</p>
                            </div>
                            <div className="blog__comments-item">
                                <div className="blog__comments-img">
                                    <img src={commentOne} alt="" />
                                </div>
                                <div className="blog__comments-info">
                                    <p>Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
                                    <div className="blog__comments-info-bottom">
                                        <section>
                                            <h5><a href>Emilly Blunt</a></h5>
                                            <p>December 4, 2017 at 3:12 pm</p>
                                        </section>
                                        <section>
                                            <a className="blog__comments-info-reply" href>Reply</a>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__comments-item">
                                <div className="blog__comments-img">
                                <img src={commentTwo} alt="" />
                                </div>
                                <div className="blog__comments-info">
                                    <p>Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
                                    <div className="blog__comments-info-bottom">
                                        <section>
                                            <h5><a href>Emilly Blunt</a></h5>
                                            <p>December 4, 2017 at 3:12 pm</p>
                                        </section>
                                        <section>
                                            <a className="blog__comments-info-reply" href>Reply</a>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__comments-item">
                                <div className="blog__comments-img">
                                    <img src={commentThre} alt="" />
                                </div>
                                <div className="blog__comments-info">
                                    <p>Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
                                    <div className="blog__comments-info-bottom">
                                        <section>
                                            <h5><a href>Emilly Blunt</a></h5>
                                            <p>December 4, 2017 at 3:12 pm</p>
                                        </section>
                                        <section>
                                            <a className="blog__comments-info-reply" href>Reply</a>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="single-blog__form">
                            <div className="single-blog__comments-count">
                                <p>Leave a Reply</p>
                            </div>
                            <form action="">
                                <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment" style={{ height: `height: 212px` }}></textarea>
                                <input className="blog__form-input-half" type="text" placeholder="Name" />
                                <input className="blog__form-input-half" type="text" placeholder="Email" />
                                <input className="blog__form-input-compl" type="text" placeholder="Website" />
                                <button>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <AppBlogSidebar />
            </div>
        </div>
    )
}

export default AppSingleBlog;