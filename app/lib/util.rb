# Basic utility class for managing general purpose operations.
# NOTE: Research different patterns that don't rely on a catch-all class.
class Util
  class << self
    # Read the lineup for a file provided.
    # => Util.lineup_data(filename: "coachella_2019.yml")
    def lineup_data(filename:, fixtures_path: Fixtures.fests)
      YAML.load_file("#{fixtures_path}/#{filename}")
    end
  end
end