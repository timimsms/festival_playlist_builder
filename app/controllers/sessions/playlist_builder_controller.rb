module Sessions
  class PlaylistBuilderController < BaseController
    helper_method :welcome_message

    # GET /sessions/playlists_builder/new
    def new
      # render new.html.erb
    end

    private

    def welcome_message
      "Hello, #{current_user.name}. Let's build your first playlist!"
    end
  end
end
