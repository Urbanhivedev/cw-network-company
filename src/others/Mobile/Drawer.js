import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpg';

function Drawer({ drawer, action }) {

    return (
        <>
            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                                <div className="offcanvas-brand text-center mb-40">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="mailto:yusufkasim888@gmail.com">
                                                <i className="fal fa-envelope"></i>{' '}
                                                yusufkasim888@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                           <a href="#">
                                                <i className="fal fa-phone"></i> +(234) 9035197246
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drawer;
