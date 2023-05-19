var SUPABASE_URL = 'https://habeqzcpltzrevbmbwet.supabase.co'
var SUPABASE_KEY =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhYmVxemNwbHR6cmV2Ym1id2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0Mzg2MzgsImV4cCI6MjAwMDAxNDYzOH0.DC5pThvZd4jUMgOefRDW8QGbpRjV0gmCtupjA5KXykM'
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event) {
  var signUpForm = document.querySelector('#signUpButton')
  signUpForm.addEventListener("click", signUpSubmitted)

  // var logInForm = document.querySelector('#log-in')
  // logInForm.onsubmit = logInSubmitted.bind(logInForm)

  // var userDetailsButton = document.querySelector('#user-button')
  // userDetailsButton.onclick = fetchUserDetails.bind(userDetailsButton)

  // var logoutButton = document.querySelector('#logout-button')
  // logoutButton.onclick = logoutSubmitted.bind(logoutButton)
})

const signUpSubmitted = (event) => {
  const userName = document.getElementById("user").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  console.log(email, password);

  supabase.auth
    .signUp({ email, password })
    .then((response) => {
      response.error ? alert(response.error.message) : setToken(response)
    })
    .catch((err) => {
      alert(err)
    })

    let user = async () => {
      const teste = await supabase.from('users')
        .insert([{
          'user_name': userName,
          'email': email,
          'password': password,
          'role_id': 1,
        }], { return: 'minimal'})
  
        console.log(teste);
        // .execute();
    }
  
    user();
}

const logInSubmitted = (event) => {
  const email = event.target[0].value
  const password = event.target[1].value

  supabase.auth
    .signIn({ email, password })
    .then((response) => {
      response.error ? alert(response.error.message) : setToken(response)
    })
    .catch((err) => {
      alert(err.response.text)
    })
}

const fetchUserDetails = () => {
  alert(JSON.stringify(supabase.auth.user()))
}

const logoutSubmitted = (event) => {

  supabase.auth
    .signOut()
    .then((_response) => {
      document.querySelector('#access-token').value = ''
      document.querySelector('#refresh-token').value = ''
      alert('Logout successful')
    })
    .catch((err) => {
      alert(err.response.text)
    })
}

function setToken(response) {
  if (response.user.confirmation_sent_at && !response?.session?.access_token) {
    alert('Confirmation Email Sent')
  } else {
    document.querySelector('#access-token').value = response.session.access_token
    document.querySelector('#refresh-token').value = response.session.refresh_token
    alert('Logged in as ' + response.user.email)
  }
}
