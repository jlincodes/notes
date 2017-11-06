# REPRISE LECTURE: RAILS AUTH

#### Requests:
- Browse site while not logged in
- Browse site while logged in
- Signing up
- Logging in

#### Cookies, Session Token, Auth Token
- Session token is stored in the cookies
- Each time form data is sent up to the server, the authenticity token is sent along with the form data
- Cross-site Request Forgery (CSRF)

### BCrypt
- Start a new rails project
- uncomment `bcrypt`
- add gems `better-errors`, `binding-of-caller`, `pry-rails`
- bundle
- BCrypt generates a string that contains the salt and the password digest.
- `.salt` pulls the salt of the string
- `.checksum` pulls the password digest
- `.cost` number of times BCrypt hashes a password
- BCrypt creates a new string each time `BCrypt::Password.create()` is run even if the same input is passed in each time.
- `BCrypt::Password.new()` - turns a password_digest back into a BCrypt::Password object
  - When we save the password_digest "string" into the database, it is stored as a class String. But to check is_password?, we have to pass in a BCrypt object, hence .new to convert back BCrypt object.
- rails g model User
- add `:username`, `:password_digest`, `:session_token` to Users table & add_index and unique property for `:username` & `:session_token`
- having a session token does away with the need to check username and password (i.e. have the user log in) each time a user navigates to a different part of a website or opens a new tab
- db:migrate:reset

### Steps
- Add BCrypt gems
- Update User Table
- Update User Model
- Add User and Session Rules
- Update Application Controller
- Update Users Controller
- Create Sessions Controller

### User Model
- Validations (run before create, create!, save, save!, update, update_attributes, update_attributes!)
  - password_digest, session_token
  - username
- What if two users make accounts with the same username at the same time? That's where model-level validations (unique: true) come in.
- Side note: single-threaded vs multi-threaded processes.
- `#password=(password)`
- `#`

```Ruby
validates :username, :session_token, presence: true, uniqueness: true
validates :password_digest, presence: true
# ^Active Record creates getters and setters for the attributes in the schema
validates :password, length: { minimum: 6, allow_nil: true }

after_initialize :ensure_session_token #called when User.new
# before_validates :ensure_session_token # called when @user.save before validations
# ^ callback ^
attr_reader :password

# Active Record creates getters and setters anything passed in on in initialize:
# def initialize
  # @username = username
  # @attributes = {}
# end

# def method
#   puts self.username
# end

# A getter and setter must be created for any instance variable that isn't an attribute in our schema, like password for example:
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def ensure_session_token # required for new user creation
  self.session_token ||= SecureRandom.urlsafe_base64
  # SecureRandom - library that is included with Rails
  # Lazy operator because a user may already have a sess token
end

def reset_session_token! # bang operator because we're changing the DB
  self.session_token = SecureRandom.urlsafe_base64
  self.save
  self.session_token
end

def valid_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  if user && valid_password?(password) ? user : nil
end
```

### User and Session Routes
- `users#new`, `users#create`
- `session#new`, `session#create`, `session#destroy`
- resources vs resource
  - resources sessions delete requires an id
  - resource session delete does not require an id; cookie just gets reset. There is only one session; there is no need for an id

### Application Controller:
- `#login!`
- `#logout!`
- `#current_user`
- `#require_logged_out`
- `#require_logged_in`
- UsersController and SessionsController inherit from Application Controller so they have access to all the methods above

```Ruby
protect_from_forgery with: :exception # checks for auth token

helper_method :current_user, :logged_in?

def current_user
  # session is a hash stored in the browser; inside, there is a :session_token key with a session token string
  return nil unless session[:session_token]
  @current_user ||= User.find_by(session_token: session[:session_token])
  # lazy operator so that the current user doesn't have to be looked up each time the method current_user is called (like in the views for example)
end

def logged_in?
  !!current_user
end

def login!(user)
  session[:session_token] = user.session_token
end

def logout!
  current_user.reset_session_token!
  session[:session_token] = nil # saves us a DB query (refer to line 119)
end


def require_logged_in
  redirect_to new_session_url unless logged_in?
end

# prevent an existing, logged in user from creating a new account, for example
def require_logged_out
  redirect_to posts_url if logged_in?
end
```

### Users Controller
- add :password

```Ruby
before_action :require_logged_out, only: [:new, :create]
# before_action :require_logged_in, only: [:destroy]

def new
  render :new
end

def create
  # p params # hash of input
  # p user_params
  @user = User.new(user_params)
  if @user.save
    login!(@user)
    redirect_to posts_url
  else
    # flash.now is before rendering
    flash.now[:errors]  = @users.errors.full_messages
    render :new

    # # flash will create a new response cycle
    # flash[:errors]  = @users.errors.full_messages # errors will persist
    # redirect_to new_user_url
  end
end

# def destroy
# end

private

def user_params
  params.require(:user).permit(:username, :password)
end
```

- In users/new.html.erb:

```HTML
<form action="<%= users_url %>" method="POST">
  <input
    type="hidden"
    name="authenticity_token"
    value="<%= form_authenticity_token %>">
  <input type="text" name="" value="">
```

`form_authenticity_token` can be overwritten in our Application Controller



```Ruby
before_action :require_logged_out, only: [:new, :create]

def new
  render :new
end

def create
  user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
  )
  if user.nil?
    flash.now[:errors] = ["Invalid username or password"]
    render :new
  else
    login!(user)
    redirect_to posts_url
  end
end

def destroy
  logout!
  redirect_to new_session_url
end

```

```JavaScript
const noJob = true;
const rejections = 0;

while (noJob) {
  weep();
  setTimeout(() => breathe(), 5000);
  noJob = apply();
}

const breathe = () => {
  inhale(4);
  setTimeout(pause, 2000);
  exhale(4);
};

const apply = () => {
  if (accepted) {
    return true;
  } else {
    rejections ++;
    return false;
  }
};
```
