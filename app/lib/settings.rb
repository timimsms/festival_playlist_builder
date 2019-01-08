# Small Ruby configuration class dedicated to managing application settings
# and various configurations that are environment specific.
class Settings
  class << self
    def spotify_credentials
      [ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"]]
    end
  end
end
