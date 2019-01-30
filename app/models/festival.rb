# NOTE: Currently not an AR-backed model.
class Festival
  attr_accessor :id, :name, :year, :lineup, :filename

  def initialize(yaml_data)
    @name = yaml_data.fetch(:name)
    @id = yaml_data.fetch(:id, name.downcase)

    @year = yaml_data.fetch(:year)
    @lineup = yaml_data.fetch(:lineup)
    @filename = yaml_data.fetch(:filename)
  end

  # Builds an array of all data in lib/fixtures/fests/**.yml
  def to_json
    {
      id: self.id,
      name: self.name,
      year: self.year,
      lineup: self.lineup,
      filename: self.filename,
    }
  end

  def self.build_all
    Util.lineup_files(fixtures_path: Fixtures.fests).map do |fest_file|
      Festival.build_for(fest_file)
    end
  end

  def self.build_for(fest_file)
    fest_file_path = "#{Rails.root}/lib/fixtures/fests/#{fest_file}.yml"
    fest_yaml_data = YAML.load_file(fest_file_path)
    Festival.new(
      name: fest_yaml_data.fetch("name"),
      year: fest_yaml_data.fetch("year"),
      lineup: fest_yaml_data.fetch("lineup"),
      filename: "#{fest_file}"
    )
  end
end
