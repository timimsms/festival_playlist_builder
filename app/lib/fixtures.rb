# Small PORO similar to Settings, intended to manage Fixtures related data.
class Fixtures
  # Returns the directory for the provided method call if said directory exists.
  def self.method_missing(method_name, *args, &block)
    "#{Rails.root}/lib/fixtures/#{method_name}/"
      .yield_self { |path| Dir.exists?(path) ? path : nil }
  end
end
