# NOTE: Currently not an AR-backed model.
# TODO: If this stays the same/grows, use meta-programming and a small list of
#       attributes (or just use attr_accessor / normal AR conventions).
class Festival
  attr_accessor :name, :year, :lineup, :filename

  def initialize(yaml_data)
    @filename = yaml_data.fetch(:filename)
    @name = yaml_data.fetch(:name)
    @year = yaml_data.fetch(:year)
    @image = yaml_data.fetch(:image)
    @lineup = yaml_data.fetch(:lineup)
  end

  # Builds an array of all data in lib/fixtures/fests/**.yml
  def to_json
    {
      filename: self.filename,
      name: self.name,
      year: self.year,
      image: self.image,
      lineup: self.lineup
    }
  end

  def self.build_all
    Util.lineup_files(fixtures_path: Fixtures.fests).map do |fest_file|
      Festival.build_for(fest_file)
    end
  end

  def self.build_for(fest_file)
    fest_file_path = "#{Rails.root}/lib/fixtures/fests/#{fest_file}"
    fest_file_path += ".yml" unless fest_file_path.include?(".yml")
    fest_yaml_data = YAML.load_file(fest_file_path)

    Festival.new(
      filename: "#{fest_file}",
      name: fest_yaml_data.fetch("name"),
      year: fest_yaml_data.fetch("year"),
      image: fest_yaml_data.fetch("image"),
      lineup: fest_yaml_data.fetch("lineup")
    )
  end
end
