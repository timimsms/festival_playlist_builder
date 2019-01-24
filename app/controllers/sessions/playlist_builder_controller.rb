module Sessions
  class PlaylistBuilderController < BaseController
    # GET /sessions/playlists_builder/new
    def new
      render plain: welcome_message
    end

    private

    def welcome_message
      "Hello, #{current_user.name}. Let's build your first playlist!"
    end
  end
end
