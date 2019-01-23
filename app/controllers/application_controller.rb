class ApplicationController < ActionController::Base
  def after_sign_in_path_for(resource)
    request.env["omniauth.origin"] || root_path
  end
end
