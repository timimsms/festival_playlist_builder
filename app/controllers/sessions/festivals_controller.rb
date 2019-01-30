module Sessions
  class FestivalsController < BaseController
    # GET /sessions/festivals
    def index
      render json: Festival.build_all.to_json
    end

    # # GET /sessions/festivals/:name
    # NOTE: Evaluate primary key if we're building on the fly. - TW
    def show
      render plain: "test"
    end
  end
end
