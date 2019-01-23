class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def spotify
    # TODO: See if this can be condensed to one line.
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in_and_redirect @user
  end
end
