module Sessions
  class FestivalsController < BaseController
    # GET /sessions/festivals
    def index
      render plain: "test"
    end

    # # GET /sessions/festivals/:name
    # NOTE: Evaluate primary key if we're building on the fly. - TW
    def show
      render plain: "test"
    end
  end
end
