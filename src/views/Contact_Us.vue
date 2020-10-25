<template>
  <div class="contact_us">
    <!----<h1>This is an contact us page</h1>--->
    <main role="main">
      <div class="Contact_container">
        <h1>Contact Us!</h1>
        <p>Please fill in this form to send your feedback!</p>
       <!---- <form class="form-contact" method="POST" action="contact_form.php">-->
         <!--<form class="form-contact" method="POST" action="https://formspree.io/email@domain.tld">-->
        <form class="form-contact" action="#">
          <input
            type="text"
            name="fullname"
            placeholder="Enter Full Name"
            required
          />

          <input
            type="email"
            name="mailaddr"
            placeholder="Your Email Address"
            required
          />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea
            name="message"
            cols="5"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
          <div class="clearfix">
           <router-link to="/">
            <button
              id="cbtn"
              type="cancel"
              style="width: 150px"
              
              class="cancelbtn"
            >
           Cancel
              
            </button>
            </router-link> 

             <!--- <button
              id="sendbtn"
              type="submit"
              name="sendmsg-button"
              style="width: 150px"
              class="contactbtn"
            >Send Message
            </button>--->
           <!---<b-button @click="$bvModal.show('modal-scoped')" variant="success">Send Message</b-button>
              <b-modal id="modal-scoped">
                <p>Your feedback has been received and will take 1-2 weeks for response.</p>
                <template #modal-footer="{ ok }">-->
                  <!-- Emulate built in modal footer ok and cancel button actions -->
               <!-- <b-button size="sm" variant="primary" @click="ok()>OK</b-button>
                </template>
              </b-modal>--->
            <a data-toggle="modal" href="#myModal"  id="sendbtn" class="contactbtn" style="background-color:green">Send Message</a>
              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Feedback recieved</h4>
               <!---<button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>---->
                </div>
              <div class="modal-body">
                Your feedback has been recieved and will take 1-2 weeks response.
              </div>
              <div class="modal-footer">
               <!--<a color="green" class="btn btn-primary" @click="$bvModal.hide('modal')">OK </a>-->
               <button color="green" class="btn btn-primary" data-dismiss="modal" aria-hidden="true" @click="$router.push({ path: '/' })">OK</button>
               </div>
               </div>
               </div>
             </div>
 
          </div>
        </form>
      </div>
    </main>
  </div>
</template>


<style>
    
      /* Extra styles for the cancel button */
      #cbtn {
        padding: 14px 20px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: left;
        margin-top: 2%;
      }

      /* Float cancel and signup buttons and add an equal width*/
      .cancelbtn {
        float: inline-start;
        width: 20%;
      }
      /*#sendbtn_contact{
        width: 150px;
        height: 50px;
      }*/
      input[type="submit"] {
        background-color: #4caf50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
      }

      input[type="submit"]:hover {
        background-color: #45a049;
      }
      /* Set a style for all buttons */
      #sendbtn {
        background-color: #4caf50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        opacity: 0.9;
        border-radius: 4px;
        cursor: pointer;
        float: right;
        width: 150px;
        height: 50px;
      }

      #cbtn:hover,
      #sendbtn:hover {
        opacity: 1;
      }

    </style>

   
