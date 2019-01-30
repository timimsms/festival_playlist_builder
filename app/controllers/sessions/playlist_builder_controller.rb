module Sessions
  class PlaylistBuilderController < BaseController
    helper_method :welcome_message

    # GET /sessions/playlists_builder/new
    def new
      @playlist_builder_props = { name: current_user.name }
    end
  end
end
