import React, { useState } from "react";
// import PopUp from "./popUp";
// import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const OurTeam = (props) => {
  const [handle, setHandle] = useState(false);
  const handlerChanger = () => {
    setHandle(true);
    // handle == false ? setHandle(true) : setHandle(false)
    console.log(handle);
  };

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <div class="index-content">
        <div class="block2" id="aboutus">
          <div class="content-container">
            <div class="block2__container">
              <h2 class="block2__header" translate="">
                <span class="ng-scope">Meet Our Core Team</span>
              </h2>
              <div class="block2__text" translate="">
                <span class="ng-scope">
                  Team Brands Impact combines the flair for creative advertising
                  with good business sense. Our core team of young professionals
                  bring together vast experience from the domains of brand
                  management, advertising, public relations, event management,
                  media planning, social media management and more. We also
                  enjoy a strong network of associates specialising in brand
                  strategising, production, content writing and designing with
                  years of experience.
                </span>
              </div>
            </div>

            <div class="empty-cells hide-on-mobile">
              <div class="cell-container cell4">
                <div class="cell cell-gray"></div>
                <div class="cell cell-green purple_back"></div>
              </div>
              <div class="cell-container cell8">
                <div class="cell cell-gray"></div>
                <div class="cell cell-green"></div>
              </div>
              <div class="cell-container cell9">
                <div class="cell cell-gray"></div>
                <div class="cell cell-green"></div>
              </div>
            </div>
            <div class="not-empty-cells">
              <div class="cell-container cell1">
                <div class="cell cell-gray hex-image_1">
                  <div class="cell-content align-middle"></div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }} id>
                      Amol Monga
                    </div>
                    <div
                      class="ng-scope"
                      style={{ fontSize: "20px", paddingBottom: "12px" }}
                    >
                      Founder - Director
                    </div>
                    <div>
                      {/* <button
                        class="btn btn-primary btn-xs"
                        data-toggle="modal"
                        data-target="#infoAmol"
                        data-whatever="Amol Monga"
                        onClick={handlerChanger}
                      >
                        Read More
                      </button> */}
                      <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell-container cell2">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_2">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div class="ng-scope" style={{ fontSize: "25px" }}>
                      Ankita Singh
                    </div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Director - Marketing
                    </div>
                    <div>
                      <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell-container cell3">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_3">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Abhineet Singh</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Head - Operations
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell5">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_4">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div class="ng-scope" style={{ fontSize: "25px" }}>
                      Ruchika Verma
                    </div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Sr. Manager-BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell-container cell6">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_5">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Harshita Chawla</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Corporate Comm. - Manager
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell-container cell7">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_6">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Renu Gupta</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Manager-BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell8">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_7">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Aditi Singh</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Manager - Client Servicing and Business Development
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell9">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_8">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Bhaswati Kalita</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Executive - BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell10">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_9">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Shilpi Madaan</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Manager - BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell11">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_10">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Aarushi Chawla</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Executive - BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell12">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_11">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Namita Maurya</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Executive - BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell13">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_12">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Trisha Awasthi</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Executive - BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell14">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_13">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Aryaman Tyagi</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Executive - BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell15">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_14">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Dr Bhawna Vishraj</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Executive - BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell16">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_15">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Sukun Chadha</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      HR Executive
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell-container cell17">
                <div class="cell cell-gray">
                  <div class="cell cell-gray hex-image_16">
                    <div class="cell-content align-middle"></div>
                  </div>
                </div>
                <div class="cell cell-green purple_back">
                  <div class="cell-content align-middle" translate="">
                    <div style={{ fontSize: "25px" }}>Neha Bakshi</div>
                    <div style={{ fontSize: "20px", paddingBottom: "12px" }}>
                      Executive - BD
                    </div>
                    <div>
                    <Button
                        class="btn btn-primary btn-xs"
                        color="primary"
                        onClick={toggle}
                      >
                        {buttonLabel} Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {
        
      handle == true && <PopUp status="true"  />  
      
      } */}

      <div className="popUpComing" style={{ marginTop: "80%" }}>
        <Modal
          style={{ backgroundColor: "#a44685" }}
          isOpen={modal}
          toggle={toggle}
        >
          <ModalHeader style={{ backgroundColor: "#a44685" }} toggle={toggle}>
            Modal title
          </ModalHeader>
          <ModalBody style={{ backgroundColor: "#a44685", color: "#FFF" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter style={{ backgroundColor: "#a44685" }}>
            {/* <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "} */}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default OurTeam;
