class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, and
  devise :database_authenticatable, :registerable, :rememberable,
         :recoverable, :validatable, :trackable, :confirmable,
         :omniauthable, omniauth_providers: %i(spotify)

  # Create a User record or update it based on the returned provider UID.
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.token = auth.credentials.token
      user.expires = auth.credentials.expires
      user.expires_at = auth.credentials.expires_at
      user.refresh_token = auth.credentials.refresh_token
      raise "!" # <-- TODO: store provider_data (JSONb)
    end
  end
end
