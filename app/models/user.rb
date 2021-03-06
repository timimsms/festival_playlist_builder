class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, and
  devise :database_authenticatable, :registerable, :rememberable,
         :recoverable, :validatable, :trackable, :confirmable,
         :omniauthable, omniauth_providers: %i(spotify)

  # Create a User record or update it based on the returned provider UID.
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email # <-- TODO: can we get this from spotify?
      user.password = Devise.friendly_token[0, 20]

      user.token = auth.credentials.token
      user.expires = auth.credentials.expires
      user.expires_at = auth.credentials.expires_at
      user.refresh_token = auth.credentials.refresh_token

      user.provider_data = auth.extra.raw_info.to_hash
    end
  end

  def name
    provider_data&.fetch("display_name", nil)
  end
end
