# Small Ruby configuration class dedicated to managing application settings
# and various configurations that are environment specific.
class Settings
  class << self
    def spotify_credentials
      [spotify_client_id, spotify_client_secret]
    end

    def spotify_client_id
      ENV["SPOTIFY_CLIENT_ID"]
    end

    def spotify_client_secret
      ENV["SPOTIFY_CLIENT_SECRET"]
    end

    # TODO: Have this loaded from an environment variable. - TW
    def root_url
      "http://localhost:3000"
    end
  end
end
