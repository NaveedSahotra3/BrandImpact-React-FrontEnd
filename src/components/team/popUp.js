import React, { useEffect } from "react";

const PopUp = (props) => {
  console.log(props.status);
  const [open, setOpen] = React.useState(true);
  


  const handleChange = () => {
    if(props.status == true) {

      setOpen(true);
    }
    else{
      setOpen(false)
    }
   
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("This will run after 1 second!");

  //     setOpen(true);
  //   }, 1000);
  // }, [open]);

  return (
    <div className={open == true ? 'popUpComing' : 'notComingPop' }>
      {/* <div
        class="modal fade bd-example-modal-lg"
        id="infoAarushi"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg txt_clr" role="document">
          <div class="modal-content bck_clr">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">
                Aarushi Chawla
              </h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                <em>
                  &quot;People often complain about lack of time when lack of
                  direction is the real problem. - Zig Ziglar
                </em>
              </p>
              <p style={{ textAlign: "justify" }}>
                After pursuing business and management in her graduation and
                post graduation, Aarushi joined brands impact to take upon a
                test on her personality and follow her natural instinct of
                social interaction. She always followed her dreams by taking the
                road not taken, in terms of internships and grades. Her
                professional experience over the years helped her choose the
                right industry. She is a fitness enthusiast and this hard work
                will take her a long way as she believes that time is now if you
                ace it.
              </p>
              <a
                href="https://linkedin.com/in/aarushi-chawla-8469a1127"
                class="button-footr"
                target="_blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* {open == true && ( */}
        <div className="dialog_box">
  
          <div class="PopUpHeader">
            <h3 class="modal-title" id="">
              Ankita Singh
            </h3>
            <button type="button" class="close">
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div>
            After gaining rich experience in the fields of Advertising and
            fashion designing, Ankita joined Brands Impact where she heads a
            team of young and dynamic marketing professionals. With her
            excellent interpersonal skills and creative bent of mind, Ankita not
            only drives her team efficiently but also contributes immensely to
            brand concepts and designs. She is one of the youngest and most
            successful woman achievers in the branding and marketing domains. An
            ultimate people's person, Ankita's striking spirit and leadership
            skills has helped her team members grow into successful marketers
            who look up to her as an ideal mentor. She believes in leading from
            the front and has emerged as the face of the company over the years.
            Ankita is also one of the very few gifted designers who owe their
            success only to their talent and not to any design school. She has
            designed for, and been appreciated by, several socialites and
            Bollywood divas including Karisma Kapoor, Soha Ali Khan and Raveena
            Tandon. Ankita still designs for her very exclusive set of clients.
            A firm believer in personal growth, Ankita has achieved success
            through her keen desire to express herself either through her
            creations or her sales pitches, which clients tend to find
            absolutely irresistible!
          </div>

          <div class="modal-footer">
            <button
              type="button"
              onClick={handleChange}
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
     {/* )}  */}
    </div>
  );
};

export default PopUp;
