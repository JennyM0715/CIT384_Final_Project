<template>
  <div class="sign_up">
    <!----<h1>This is a sign up page</h1>---->
    <main role="main">
      <div class="SignUp_container">
        <h1>Sign Up With Us!</h1>
        <p>Please fill in this form to recieve promotional offers, discounts, notices on special events, and so much more!</p>
        <form class="form-signup" action="#">
          <input
            type="text"
            name="fname"
            placeholder="Enter First Name"
            required
          />
          <input
          type="text"
          name="lname"
          placeholder="Enter Last Name"
          required
        />
          <input
            type="email"
            name="mailaddr"
            placeholder="Your Email Address"
            required
          />
          
          <div class="sign_cancel_buttons">
          <router-link to="/">
            <button
              id="canlbtn"
              type="cancel"
              style="width: 150px; margin-top: 5%;"
              
              class="clbtn"
            >
              Cancel
            </button>
             </router-link> 
            <!---<button
              id="signupbtn"
              type="submit"
              name="sendmsg-button"
              style="width: 150px; margin-top: 5%;"
              class="signbtn"
            >
              Sign Up
            </button>----->
            <a data-toggle="modal" href="#myModal" id="signupbtn" class="btn btn-primary" style="background-color:green">Sign Up</a>
              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Sign up form has been recieved</h4>
                  <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>-->
                </div>
              <div class="modal-body">
                Thank you for signing up! Please check email for our special offers!
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
/****************************************/
/*          SIGN UP.HTML EDITING   */
/******************************************/
input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 5%;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

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

.SignUp_container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 40px;
  height: 450px;
  width: 450px;
  text-align: center;
  margin-left: 30%;
  margin-right: 50%;
  margin-top: 5%;
  margin-bottom: 10%;
  font-size: 15px;
}

/* Responsive layout - when the screen is less than 600px wide, 
make the two columns stack on top of each other instead of next 
to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
/* Clear floats */
.sign_cancel_buttons::after {
  content: "";
  clear: both;
  display: table;
}

/* Extra styles for the cancel button */
#canlbtn {
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
.clbtn,
.signbtn {
  float: inline-start;
  width: 20%;
}
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
#signupbtn {
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
  margin-top: 5%;
  font-size: 15px;
}

#canlbtn:hover,
#signupbtn:hover {
  opacity: 1;
}


</style>