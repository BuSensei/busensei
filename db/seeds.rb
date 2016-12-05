# Users
[
  {
    email: 'busensei@gmail.com',
    password: 'password',
    password_confirmation: 'password'
  }
].each do |u|
  user = User.find_by_email(u[:email])
  unless user
    User.create(u)
  end
end
